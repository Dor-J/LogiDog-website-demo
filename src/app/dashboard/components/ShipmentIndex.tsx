// src/app/dashboard/components/ShipmentIndex.tsx
import React from 'react'
import type { Shipment } from '~/models/shipment'
import ShipmentList from './ShipmentList'

interface Props {
    shipments: Shipment[]
    loading: boolean
}

const ShipmentIndex: React.FC<Props> = ({ shipments, loading }) => {
    return (
        <section className="max-w-full overflow-x-auto">
            <table className="min-w-[600px] table-fixed divide-y divide-gray-300 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-3 py-2 text-left">ID</th>
                        <th className="px-3 py-2 text-left">Risk</th>
                        <th className="px-3 py-2 text-left">Status</th>
                        <th className="px-3 py-2 text-left">Origin</th>
                        <th className="px-3 py-2 text-left">Destination</th>
                        <th className="px-3 py-2 text-left">ETA</th>
                    </tr>
                </thead>

                <ShipmentList shipments={shipments} loading={loading} />
            </table>
        </section>
    )
}

export default ShipmentIndex
