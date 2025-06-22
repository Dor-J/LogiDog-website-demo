'use client'

import React, { useEffect, useState } from 'react'
import type { Shipment } from '~/models/shipment'
import Filter from './Filter'
import type { FilterProps } from './Filter'
import { storageService } from '~/services/async-storage.service'

import ShipmentIndex from './ShipmentIndex'

const ENTITY_TYPE = 'shipments'

function AtRiskShipments() {
    const [shipments, setShipments] = useState<Shipment[]>([])
    const [loading, setLoading] = useState(true)

    // Load from localStorage or JSON file
    useEffect(() => {
        const init = async () => {
            // Check localStorage first
            let items = await storageService.query<Shipment>(ENTITY_TYPE)
            if (!items.length) {
                // If not seeded, fetch from JSON and seed
                const res = await fetch('/public/assets/data/shipments.json')
                const json = (await res.json()) as Shipment[]

                for (const shipment of json) {
                    // Use storageService to preserve IDs (uses put logic)
                    await storageService.post<Shipment>(
                        ENTITY_TYPE,
                        shipment as Omit<Shipment, '_id'> & { _id?: string }
                    )
                }
                items = await storageService.query<Shipment>(ENTITY_TYPE)
            }
            setShipments(items)
            setLoading(false)
        }
        void init()
    }, [])

    // Filter state
    const [filtered, setFiltered] = useState<Shipment[]>([])
    useEffect(() => {
        setFiltered(shipments)
    }, [shipments])

    // Filtering logic (drilled to <Filter>)
    const handleSearch: FilterProps['onSearch'] = (filters) => {
        setFiltered(
            shipments.filter((s) => {
                // Risk filter
                const riskOk =
                    filters.riskLevel === 'All' ||
                    (s.riskLevel ?? 'None') === filters.riskLevel
                // Mode filter
                const modeOk =
                    filters.mode === 'All' ||
                    s.mode.toLowerCase() === filters.mode.toLowerCase()
                // Origin/Destination filter
                const originOk =
                    !filters.origin ||
                    s.originCountry
                        .toLowerCase()
                        .includes(filters.origin.toLowerCase())
                const destOk =
                    !filters.destination ||
                    s.destinationCountry
                        .toLowerCase()
                        .includes(filters.destination.toLowerCase())
                return riskOk && modeOk && originOk && destOk
            })
        )
    }

    return (
        <main className="flex w-full flex-col items-center">
            <section className="flex w-full flex-col gap-6 px-4 md:max-w-7xl md:flex-row">
                <Filter onSearch={handleSearch} />
                <ShipmentIndex shipments={filtered} loading={loading} />
            </section>
        </main>
    )
}

export default AtRiskShipments
