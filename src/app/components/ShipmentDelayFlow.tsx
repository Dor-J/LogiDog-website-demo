'use client'

import React from 'react'
import ThresholdTable from './ThresholdTable'

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
    <div className="animate-fadeIn inline-block max-w-xs min-w-[180px] rounded-xl border border-blue-200 bg-white px-4 py-2 text-center text-sm shadow-sm transition-all hover:bg-blue-50 md:text-base">
        {children}
    </div>
)

const ShipmentDelayFlow: React.FC = () => {
    return (
        <section className="mx-auto mt-8 flex w-full max-w-3xl flex-col space-y-6 px-2 sm:px-6">
            <div className="mx-auto mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold text-blue-900 md:text-3xl">
                    Early-Delay Flowchart
                </h2>
                <p className="text-base text-gray-700">
                    Description outlining proposed logic for early delay
                    identification
                </p>
            </div>

            <div
                id="flowchart"
                className="overflow-x-auto rounded-2xl border border-blue-100 bg-blue-50 pb-2 shadow-inner"
            >
                <div className="flex min-w-[340px] flex-col items-center justify-center gap-4 py-8">
                    {/* Row 0 – START */}
                    <FlowChartItem>
                        START – Shipment update / event received
                    </FlowChartItem>
                    <div className="h-6 w-6 text-center text-blue-400">
                        <ArrowDownIcon />
                    </div>
                    {/* Row 1 – initial check Delivered? */}
                    <FlowChartItem>1. Already Delivered?</FlowChartItem>
                    {/* Yes / No split */}
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        {/* YES then END */}
                        <div className="flex min-w-[120px] flex-col items-center gap-2">
                            <span className="text-sm font-semibold text-gray-500">
                                (Yes)
                            </span>
                            <div className="hidden md:block">
                                <ArrowRightIcon className="h-5 w-5 text-blue-400" />
                            </div>
                            <div className="md:hidden">
                                <ArrowDownIcon className="h-5 w-5 text-blue-400" />
                            </div>
                            <FlowChartItem>END</FlowChartItem>
                        </div>

                        {/* Horizontal separator for md+ */}
                        <div className="mx-2 hidden h-0.5 w-10 bg-blue-300 md:block" />

                        {/* NO - Compute delta */}
                        <div className="flex min-w-[180px] flex-col items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500">
                                (No)
                            </span>
                            <span className="hidden md:block">
                                <ArrowRightIcon className="h-5 w-5 text-blue-400" />
                            </span>
                            <span className="md:hidden">
                                <ArrowDownIcon className="h-5 w-5 text-blue-400" />
                            </span>
                            <FlowChartItem>
                                2. Compute Days-to-ETA
                                <br />
                                (delta = ETA − Today)
                            </FlowChartItem>
                        </div>
                    </div>

                    {/* Row 2 – Buffer lookup */}
                    <ArrowDownIcon className="h-6 w-6 text-blue-400" />
                    <FlowChartItem>
                        3. Lookup Minimum Buffer for Stage
                        <br />
                        <span className="italic">(MinDays(Stage))</span>
                    </FlowChartItem>
                    {/* Row 3 – Compare */}
                    <ArrowDownIcon className="h-6 w-6 text-blue-400" />
                    <FlowChartItem>4. Is delta ≤ MinDays(Stage)?</FlowChartItem>
                    {/* Yes / No split */}
                    <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
                        {/* YES - High Risk */}
                        <div className="flex min-w-[120px] flex-col items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500">
                                (Yes)
                            </span>
                            <span className="hidden md:block">
                                <ArrowRightIcon className="h-5 w-5 text-blue-400" />
                            </span>
                            <span className="md:hidden">
                                <ArrowDownIcon className="h-5 w-5 text-blue-400" />
                            </span>
                            <FlowChartItem>
                                Trigger <strong>High-Risk</strong> Alert
                                <br />
                                <span className="italic">
                                    ‘Late-in-flow vs ETA’
                                </span>
                            </FlowChartItem>
                        </div>

                        <div className="mx-2 hidden h-0.5 w-10 bg-blue-300 md:block" />

                        {/* NO - Is stagnant? */}
                        <div className="flex min-w-[200px] flex-col items-center gap-2">
                            <span className="text-xs font-semibold text-gray-500">
                                (No)
                            </span>
                            <span className="hidden md:block">
                                <ArrowRightIcon className="h-5 w-5 text-blue-400" />
                            </span>
                            <span className="md:hidden">
                                <ArrowDownIcon className="h-5 w-5 text-blue-400" />
                            </span>
                            <FlowChartItem>
                                5. Is shipment <i>“Stagnant”</i>?<br />
                                <span className="whitespace-nowrap">
                                    • No scan &gt; 24 h (air)
                                </span>
                                <br />
                                <span className="whitespace-nowrap">
                                    • No scan &gt; 48 h (ocean/road)
                                </span>
                            </FlowChartItem>
                        </div>
                    </div>
                    {/* Row 4 – Stagnant branch */}
                    <ArrowDownIcon className="h-6 w-6 text-blue-400" />
                    <FlowChartItem>
                        ‘Yes’ → Trigger <b>Medium-Risk</b>
                        <br />
                        <span className="italic">‘Stagnant’</span> Alert
                    </FlowChartItem>
                    {/* Row 5 – External Check */}
                    <ArrowDownIcon className="h-6 w-6 text-blue-400" />
                    <FlowChartItem>
                        6. External Check
                        <br />
                        <span className="italic">
                            (weather, strike, customs)
                        </span>
                    </FlowChartItem>
                    {/* Row 6 – End / External */}
                    <ArrowDownIcon className="h-6 w-6 text-blue-400" />
                    <FlowChartItem>
                        Trigger <b>Medium/Low-Risk</b> ‘External’ Alert
                        <br />
                        or END-Safe
                    </FlowChartItem>
                </div>
            </div>

            <ThresholdTable />
        </section>
    )
}

export default ShipmentDelayFlow
