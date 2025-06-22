import React from 'react'
import type { Shipment } from '~/models/shipment'

interface Props {
    shipments: Shipment[]
    loading: boolean
}

const ShipmentList: React.FC<Props> = ({ shipments, loading }) => {
    if (loading) {
        return (
            <tbody>
                <tr>
                    <td colSpan={6} className="py-4 text-center text-gray-500">
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
                    <td colSpan={6} className="py-4 text-center text-gray-500">
                        No shipments match the filter.
                    </td>
                </tr>
            </tbody>
        )
    }

    return (
        <tbody className="min-w-[600px] table-fixed divide-y divide-gray-200">
            {shipments.map((s) => (
                <tr key={s._id}>
                    <td className="px-3 py-2">{s._id}</td>
                    <td className="px-3 py-2">
                        <span
                            className={`rounded-lg px-2 py-0.5 text-xs font-semibold ${
                                s.riskLevel === 'High'
                                    ? 'bg-red-600 text-white'
                                    : s.riskLevel === 'Medium'
                                      ? 'bg-amber-500 text-white'
                                      : s.riskLevel === 'Low'
                                        ? 'bg-green-600 text-white'
                                        : 'border-2 border-black bg-transparent text-black'
                            }`}
                        >
                            {s.riskLevel}
                        </span>
                    </td>
                    <td className="px-3 py-2">{s.currentStage}</td>
                    <td className="px-3 py-2">{s.originCountry}</td>
                    <td className="px-3 py-2">{s.destinationCountry}</td>
                    <td className="px-3 py-2">
                        {new Date(s.deliveryPlanned ?? '').toLocaleDateString()}
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default ShipmentList
