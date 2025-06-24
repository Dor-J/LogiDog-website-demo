import React from 'react'
import type { Shipment } from '~/models/shipment'

interface Props {
    shipment: Shipment
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children
}) => (
    <section className="mb-6">
        <h3 className="mb-3 border-b border-blue-100 pb-1 text-lg font-semibold text-blue-900">
            {title}
        </h3>
        <ul className="space-y-2">{children}</ul>
    </section>
)

const ShipmentItem: React.FC<Props> = ({ shipment }) => {
    return (
        <article className="mx-auto mt-8 max-w-xl space-y-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-xl">
            <h2 className="mb-2 text-center text-2xl font-bold text-blue-800">
                Shipment Details
            </h2>

            <Section title="General">
                <li className="flex justify-between">
                    <span className="text-gray-600">Shipment ID</span>
                    <span className="font-mono">{shipment._id}</span>
                </li>
                <li className="flex justify-between">
                    <span className="text-gray-600">Buyer ID</span>
                    <span>{shipment.buyerId}</span>
                </li>
                <li className="flex justify-between">
                    <span className="text-gray-600">Seller ID</span>
                    <span>{shipment.sellerId}</span>
                </li>
            </Section>

            <Section title="Geography">
                <li className="flex justify-between">
                    <span>Origin Country</span>
                    <span>{shipment.originCountry}</span>
                </li>
                <li className="flex justify-between">
                    <span>Origin Port</span>
                    <span>{shipment.originPort ?? 'Unknown'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Destination Country</span>
                    <span>{shipment.destinationCountry}</span>
                </li>
                <li className="flex justify-between">
                    <span>Destination Port</span>
                    <span>{shipment.destinationPort}</span>
                </li>
            </Section>

            <Section title="Logistics">
                <li className="flex justify-between">
                    <span>Transportation mode</span>
                    <span>{shipment.mode}</span>
                </li>
                <li className="flex justify-between">
                    <span>Product IDs</span>
                    <span>{shipment.productIds.join(', ')}</span>
                </li>
                <li className="flex justify-between">
                    <span>Carrier</span>
                    <span>{shipment.carrier}</span>
                </li>
            </Section>

            <Section title="Timeline">
                <li className="flex justify-between">
                    <span>Purchase Date</span>{' '}
                    <span>{shipment.purchaseDate ?? 'Undefined'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Dispatch - Planned</span>{' '}
                    <span>{shipment.dispatchPlanned ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Dispatch - Actual</span>{' '}
                    <span>{shipment.dispatchActual ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Arrival Country - Planned</span>{' '}
                    <span>{shipment.arrivalCountryPlanned ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Arrival Country - Actual</span>{' '}
                    <span>{shipment.arrivalCountryActual ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Customs Arrival - Planned</span>{' '}
                    <span>{shipment.customsArrivalPlanned ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Customs Arrival - Actual</span>{' '}
                    <span>{shipment.customsArrivalActual ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Customs Detain Timestamp</span>{' '}
                    <span>{shipment.customsDetainTimestamp ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Customs Clear - Planned</span>{' '}
                    <span>{shipment.customsClearPlanned ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Customs Clear - Actual</span>{' '}
                    <span>{shipment.customsClearActual ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Arrival Logistic Center - Planned</span>{' '}
                    <span>{shipment.toLogisticCenterPlanned ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Arrival Logistic Center - Actual</span>{' '}
                    <span>{shipment.toLogisticCenterActual ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Arrival to Consumer - Planned</span>{' '}
                    <span>{shipment.toConsumerPlanned ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Arrival to Consumer - Actual</span>{' '}
                    <span>{shipment.toConsumerActual ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Delivery - Planned</span>{' '}
                    <span>{shipment.deliveryPlanned ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Delivery - Actual</span>{' '}
                    <span>{shipment.deliveryActual ?? '?'}</span>
                </li>
            </Section>

            <Section title="ETA & Revisions">
                <li className="flex justify-between">
                    <span>ETA Destination Country</span>
                    <span>{shipment.etaDestinationCountry ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>ETA Revisions</span>
                    <span>{shipment?.etaRevisions?.join(', ') ?? '?'}</span>
                </li>
                <li className="flex justify-between">
                    <span>Current Stage</span>
                    <span>{shipment.currentStage}</span>
                </li>
            </Section>

            <Section title="Risk Assessment">
                <li className="flex justify-between">
                    <span>Risk Level</span>
                    <span>{shipment.riskLevel ?? '?'}</span>
                </li>
                <li className="flex flex-col">
                    <span>External Context</span>
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-blue-50 p-2 text-xs">
                        {JSON.stringify(shipment.externalContext, null, 2)}
                    </pre>
                </li>
            </Section>
        </article>
    )
}

export default ShipmentItem
