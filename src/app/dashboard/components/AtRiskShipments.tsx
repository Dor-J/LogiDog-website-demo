'use client'

import React, { useEffect, useState } from 'react'
import type { Shipment } from '~/models/shipment'
import Filter, { type FilterValues } from './Filter'
import { storageService } from '~/services/async-storage.service'
import ShipmentIndex from './ShipmentIndex'
import ShipmentModal from './ShipmentModal'

const ENTITY_TYPE = 'shipments'

function AtRiskShipments() {
    const [shipments, setShipments] = useState<Shipment[]>([])
    const [filtered, setFiltered] = useState<Shipment[]>([])
    const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(
        null
    )

    const openModal = (shipment: Shipment) => {
        setSelectedShipment(shipment)
    }

    const closeModal = () => {
        setSelectedShipment(null)
    }
    const [loading, setLoading] = useState(true)

    // Load from localStorage or JSON file
    useEffect(() => {
        const init = async () => {
            // Check localStorage first
            let data = await storageService.query<Shipment>(ENTITY_TYPE)
            if (!data.length) {
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
                data = await storageService.query<Shipment>(ENTITY_TYPE)
            }
            setShipments(data)
            setFiltered(data)
            setLoading(false)
        }
        void init()
    }, [])

    // Filter handler
    const handleSearch = (filters: FilterValues) => {
        const filteredShipments = shipments.filter((s) => {
            const riskOk =
                filters.riskLevel === 'All' ||
                (s.riskLevel ?? 'None') === filters.riskLevel
            const modeOk =
                filters.mode === 'All' ||
                s.mode.toLowerCase() === filters.mode.toLowerCase()
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
        setFiltered(filteredShipments)
    }

    return (
        <main className="flex w-full flex-col items-center">
            <section className="flex w-full flex-col items-center justify-center gap-6 px-4 lg:max-w-7xl lg:flex-row lg:items-start">
                <Filter onSearch={handleSearch} />
                <ShipmentIndex
                    shipments={filtered}
                    loading={loading}
                    onOpenModal={openModal}
                />
                {selectedShipment && (
                    <ShipmentModal
                        shipment={selectedShipment}
                        onClose={closeModal}
                    />
                )}
            </section>
        </main>
    )
}

export default AtRiskShipments
