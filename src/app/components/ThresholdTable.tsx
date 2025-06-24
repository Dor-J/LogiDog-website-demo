import React from 'react'

const ThresholdTable: React.FC = () => {
    return (
        <section className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-blue-100 bg-white p-6 shadow-xl">
            <h3 className="mb-1 text-xl font-bold tracking-tight text-blue-900">
                Threshold Table
            </h3>
            <p className="mb-4 text-sm text-gray-600 italic">
                *The values presented here are rough estimates
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900">
                            <th className="rounded-tl-2xl px-4 py-3 text-left font-semibold">
                                Stage
                            </th>
                            <th className="px-4 py-3 text-left font-semibold">
                                Typical Remaining Days
                            </th>
                            <th className="rounded-tr-2xl px-4 py-3 text-left font-semibold">
                                &quot Stagnant &quot Threshold
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="transition odd:bg-white even:bg-blue-50 hover:bg-blue-100">
                            <td className="px-4 py-3 font-medium">
                                Booked / Label Created
                            </td>
                            <td className="px-4 py-3">7&nbsp;d</td>
                            <td className="px-4 py-3">24 h no update</td>
                        </tr>
                        <tr className="transition odd:bg-white even:bg-blue-50 hover:bg-blue-100">
                            <td className="px-4 py-3 font-medium">
                                In-Transit – Origin
                            </td>
                            <td className="px-4 py-3">5&nbsp;d</td>
                            <td className="px-4 py-3">24 h</td>
                        </tr>
                        <tr className="transition odd:bg-white even:bg-blue-50 hover:bg-blue-100">
                            <td className="px-4 py-3 font-medium">
                                Customs Clearance
                            </td>
                            <td className="px-4 py-3">3&nbsp;d</td>
                            <td className="px-4 py-3">48 h</td>
                        </tr>
                        <tr className="transition odd:bg-white even:bg-blue-50 hover:bg-blue-100">
                            <td className="px-4 py-3 font-medium">
                                In-Transit – Destination Hub
                            </td>
                            <td className="px-4 py-3">2&nbsp;d</td>
                            <td className="px-4 py-3">72 h</td>
                        </tr>
                        <tr className="transition odd:bg-white even:bg-blue-50 hover:bg-blue-100">
                            <td className="px-4 py-3 font-medium">
                                Out for Delivery
                            </td>
                            <td className="px-4 py-3">0.5 d (12 h)</td>
                            <td className="px-4 py-3">6 h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ThresholdTable
