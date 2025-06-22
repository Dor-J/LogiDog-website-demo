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
        <section className="max-w-full overflow-x-auto">
            <table className="min-w-[300px] table-fixed divide-y divide-gray-300 text-sm md:min-w-[500px]">
                <thead className="bg-gray-100">
                    <tr>
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
                        <th className="px-3 py-2 text-left">Details</th>
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
