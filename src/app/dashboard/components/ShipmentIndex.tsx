// src/app/dashboard/components/ShipmentIndex.tsx
import React from 'react'
import type { Shipment } from '~/models/shipment'
import ShipmentList from './ShipmentList'

interface Props {
    shipments: Shipment[]
    loading: boolean
    onOpenModal: (shipment: Shipment) => void
}

const ShipmentIndex: React.FC<Props> = ({
    shipments,
    loading,
    onOpenModal
}) => {
    return (
        <section className="mx-auto w-full max-w-4xl overflow-x-auto rounded-2xl border border-blue-100 bg-gradient-to-tr from-blue-50 to-white shadow-xl">
            <table className="min-w-full table-fixed divide-y divide-gray-300 text-sm">
                <thead className="bg-gray-100">
                    <tr className="bg-blue-100 text-xs tracking-wide text-blue-800 uppercase">
                        <th className="px-3 py-2 text-left">ID</th>
                        <th className="px-3 py-2 text-left">Risk</th>
                        <th className="hidden px-3 py-2 text-left sm:table-cell">
                            Status
                        </th>
                        <th className="hidden px-3 py-2 text-left md:table-cell">
                            Origin
                        </th>
                        <th className="hidden px-3 py-2 text-left md:table-cell">
                            Destination
                        </th>
                        <th className="hidden px-3 py-2 text-left md:table-cell">
                            ETA
                        </th>
                        <th className="px-3 pr-2 text-center">Details</th>
                    </tr>
                </thead>

                <ShipmentList
                    shipments={shipments}
                    loading={loading}
                    onOpenModal={onOpenModal}
                />
            </table>
        </section>
    )
}

export default ShipmentIndex
