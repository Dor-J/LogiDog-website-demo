'use client'

import React from 'react'

const ArrowDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
    >
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m10.397 18.586l-.76-.967c-1.234-1.565-1.851-2.348-1.57-2.984C8.35 14 9.312 14 11.24 14h1.522c1.927 0 2.89 0 3.172.635c.281.636-.336 1.419-1.57 2.984l-.76.967C12.86 19.529 12.489 20 12 20s-.86-.471-1.603-1.414M12 14V4"
            color="currentColor"
        ></path>
    </svg>
)
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
    >
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14 12H4m14.586 1.603l-.967.76c-1.565 1.234-2.348 1.851-2.984 1.57C14 15.652 14 14.688 14 12.76v-1.52c0-1.927 0-2.89.635-3.172c.636-.281 1.419.336 2.984 1.57l.967.76C19.529 11.14 20 11.511 20 12s-.471.86-1.414 1.603"
            color="currentColor"
        ></path>
    </svg>
)

/* ──────────────────────────
   Small reusable “box” FlowChartItem
   ────────────────────────── */
const FlowChartItem: React.FC<React.PropsWithChildren<object>> = ({
    children
}) => (
    <div className="animate-fadeIn inline-block rounded-2xl border border-gray-400 bg-sky-50 px-4 py-2 text-center shadow-sm hover:bg-white">
        {children}
    </div>
)

const ShipmentDelayFlow: React.FC = () => {
    return (
        <section className="mt-auto flex w-full flex-col space-y-4">
            <div className="mx-auto mt-4 mb-8">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                    Early-Delay Flowchart
                </h2>
                <p className="text-base text-gray-700">
                    Description outlining proposed logic for early delay
                    identification
                </p>
            </div>

            <div id="flowchart" className="overflow-x-auto">
                <div className="flex flex-col items-center gap-4">
                    {/* Row 0 – START */}
                    <FlowChartItem>
                        START – Shipment update / event received
                    </FlowChartItem>
                    <div className="animate-fadeIn h-6 w-6 text-center text-gray-500">
                        <ArrowDownIcon />
                    </div>
                    {/* Row 1 – initial check Delivered? */}
                    <FlowChartItem>1. Already Delivered?</FlowChartItem>
                    {/* Yes / No split */}
                    <div className="animate-fadeIn flex flex-col items-center gap-4 md:flex-row">
                        {/* YES then END */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm font-semibold">(Yes)</span>
                            <div className="hidden h-5 w-5 text-gray-500 md:block">
                                <ArrowRightIcon />
                            </div>
                            <div className="h-5 w-5 text-gray-500 md:hidden">
                                <ArrowDownIcon />
                            </div>
                            <FlowChartItem>END</FlowChartItem>
                        </div>

                        {/* Horizontal separator for md+ */}
                        <div className="hidden h-0.5 w-16 bg-gray-400 md:block" />

                        {/* NO - Compute delta */}
                        <div className="animate-fadeIn flex flex-col items-center gap-2">
                            <span className="text-sm font-semibold">(No)</span>
                            <div className="hidden h-5 w-5 text-gray-500 md:block">
                                <ArrowRightIcon />
                            </div>
                            <div className="animate-fadeIn h-5 w-5 text-gray-500 md:hidden">
                                <ArrowDownIcon />
                            </div>
                            <FlowChartItem>
                                2. Compute Days-to-ETA
                                <br />
                                (delta = ETA − Today)
                            </FlowChartItem>
                        </div>
                    </div>
                    {/* Row 2 – Buffer lookup */}
                    <div className="animate-fadeIn h-6 w-6 text-gray-500">
                        <ArrowDownIcon />
                    </div>
                    <FlowChartItem>
                        3. Lookup Minimum Buffer for Stage
                        <br />
                        <span className="italic">(MinDays(Stage))</span>
                    </FlowChartItem>
                    {/* Row 3 – Compare */}
                    <div className="h-6 w-6 text-gray-500">
                        <ArrowDownIcon />
                    </div>
                    <FlowChartItem>4. Is delta ≤ MinDays(Stage)?</FlowChartItem>
                    {/* Yes / No split */}
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        {/* YES - High Risk */}
                        <div className="animate-fadeIn flex flex-col items-center gap-2">
                            <span className="text-sm font-semibold">(Yes)</span>
                            <div className="hidden h-5 w-5 text-gray-500 md:block">
                                <ArrowRightIcon />
                            </div>
                            <div className="h-5 w-5 text-gray-500 md:hidden">
                                <ArrowDownIcon />
                            </div>
                            <FlowChartItem>
                                Trigger <strong>High-Risk</strong> Alert
                                <br />
                                <span className="italic">
                                    ‘Late-in-flow vs ETA’
                                </span>
                            </FlowChartItem>
                        </div>

                        <div className="hidden h-0.5 w-16 bg-gray-400 md:block" />

                        {/* NO - Is stagnant? */}
                        <div className="animate-fadeIn flex flex-col items-center gap-2">
                            <span className="text-sm font-semibold">(No)</span>
                            <div className="hidden h-5 w-5 text-gray-500 md:block">
                                <ArrowRightIcon />
                            </div>
                            <div className="h-5 w-5 text-gray-500 md:hidden">
                                <ArrowDownIcon />
                            </div>
                            <FlowChartItem>
                                5. Is shipment <i>“Stagnant”</i>?<br />
                                • No scan &gt; 24 h (air)
                                <br />• No scan &gt; 48 h (ocean/road)
                            </FlowChartItem>
                        </div>
                    </div>
                    {/* Row 4 – Stagnant branch */}
                    <div className="animate-fadeIn h-6 w-6 text-gray-500">
                        <ArrowDownIcon />
                    </div>
                    <FlowChartItem>
                        ‘Yes’ → Trigger <b>Medium-Risk</b>
                        <br />
                        <span className="italic">‘Stagnant’</span> Alert
                    </FlowChartItem>
                    {/* Row 5 – External Check */}{' '}
                    <div className="animate-fadeIn h-6 w-6 text-gray-500">
                        <ArrowDownIcon />
                    </div>
                    <FlowChartItem>
                        6. External Check
                        <br />
                        <span className="italic">
                            (weather, strike, customs)
                        </span>
                    </FlowChartItem>
                    {/* Row 6 – End / External */}
                    <div className="h-6 w-6 text-gray-500">
                        <ArrowDownIcon />
                    </div>
                    <FlowChartItem>
                        Trigger <b>Medium/Low-Risk</b> ‘External’ Alert
                        <br />
                        or END-Safe
                    </FlowChartItem>
                </div>
            </div>

            {/*  Threshold Table  */}
            <div className="mx-auto mt-4 overflow-x-auto p-4">
                <h3 className="mb-3 text-2xl font-semibold">Threshold Table</h3>
                <p className="mb-3 text-gray-700">
                    *The values presented here are rough estimates
                </p>

                <table className="min-w-max divide-y divide-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left font-medium text-gray-700">
                                Stage
                            </th>
                            <th className="px-4 py-2 text-left font-medium text-gray-700">
                                Typical Remaining Days
                            </th>
                            <th className="px-4 py-2 text-left font-medium text-gray-700">
                                &quot;Stagnant&quot; Threshold
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-sky-800 text-center text-white">
                        <tr>
                            <td className="px-4 py-2 text-start">
                                Booked / Label Created
                            </td>
                            <td className="px-4 py-2">7&nbsp;d</td>
                            <td className="px-4 py-2">24 h no update</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-start">
                                In-Transit – Origin
                            </td>
                            <td className="px-4 py-2">5&nbsp;d</td>
                            <td className="px-4 py-2">24 h</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-start">
                                Customs Clearance
                            </td>
                            <td className="px-4 py-2">3&nbsp;d</td>
                            <td className="px-4 py-2">48 h</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-start">
                                In-Transit – Destination Hub
                            </td>
                            <td className="px-4 py-2">2&nbsp;d</td>
                            <td className="px-4 py-2">24 h</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-start">
                                Out for Delivery
                            </td>
                            <td className="px-4 py-2">0.5 d (12 h)</td>
                            <td className="px-4 py-2">6 h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ShipmentDelayFlow
