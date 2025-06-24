import React from 'react'
import type { Shipment } from '~/models/shipment'

interface Props {
    shipments: Shipment[]
    loading: boolean
    onOpenModal: (shipment: Shipment) => void
}

const ShipmentList: React.FC<Props> = ({ shipments, loading, onOpenModal }) => {
    if (loading) {
        return (
            <tbody>
                <tr>
                    <td
                        colSpan={7}
                        className="rounded-b-xl bg-white py-8 text-center font-medium text-gray-400"
                    >
                        Loading…
                    </td>
                </tr>
            </tbody>
        )
    }

    if (!shipments.length) {
        return (
            <tbody>
                <tr>
                    <td
                        colSpan={7}
                        className="rounded-b-xl bg-white py-8 text-center font-medium text-gray-400"
                    >
                        No shipments match the filter.
                    </td>
                </tr>
            </tbody>
        )
    }

    return (
        <tbody className="divide-y divide-blue-100">
            {shipments.map((s) => (
                <tr
                    key={s._id}
                    className="group bg-white transition even:bg-blue-50/50 hover:bg-blue-50"
                >
                    <td className="max-w-[110px] truncate px-3 py-3 font-mono text-xs text-gray-700">
                        {s._id}
                    </td>
                    <td className="flex items-center justify-center px-3 py-3">
                        <span
                            className={`rounded-md px-2 py-1 text-xs font-semibold shadow-sm ${
                                s.riskLevel === 'High'
                                    ? 'bg-red-500 text-white'
                                    : s.riskLevel === 'Medium'
                                      ? 'bg-amber-400 text-white'
                                      : s.riskLevel === 'Low'
                                        ? 'bg-green-500 text-white'
                                        : 'border border-gray-400 bg-gray-100 text-gray-700'
                            }`}
                        >
                            {s.riskLevel}
                        </span>
                    </td>
                    <td className="hidden px-3 py-3 text-sm text-gray-700 sm:table-cell">
                        {s.currentStage}
                    </td>
                    <td className="hidden px-3 py-3 text-center text-xs text-gray-600 md:table-cell">
                        {s.originCountry}
                    </td>
                    <td className="hidden px-3 py-3 text-center text-xs text-gray-600 md:table-cell">
                        {s.destinationCountry}
                    </td>
                    <td className="hidden px-3 py-3 text-center text-xs text-gray-500 lg:table-cell">
                        {s.deliveryPlanned
                            ? new Date(s.deliveryPlanned).toLocaleDateString()
                            : 'N/A'}
                    </td>
                    <td className="flex items-center justify-center px-2 py-3">
                        <button
                            onClick={() => onOpenModal(s)}
                            className="rounded-lg bg-sky-500 px-3 py-1.5 font-medium text-white shadow transition-all hover:bg-sky-600 focus:ring-2 focus:ring-sky-300 focus:outline-none active:scale-95"
                        >
                            View
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default ShipmentList
