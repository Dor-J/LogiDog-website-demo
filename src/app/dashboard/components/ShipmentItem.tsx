import React from 'react'
import type { Shipment } from '~/models/shipment'

interface Props {
    shipment: Shipment
}

const ShipmentItem: React.FC<Props> = ({ shipment }) => {
    return (
        <article className="flex h-3/4 flex-col space-y-4 py-4">
            <h2 className="text-center text-2xl font-bold">Shipment details</h2>

            <ul>
                <ul>
                    {/* General info list */}
                    <li className="flex items-center justify-between">
                        Shipment ID <span>{shipment._id}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Buyer ID <span>{shipment.buyerId}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Seller ID <span>{shipment.sellerId}</span>
                    </li>
                </ul>
                <ul>
                    {/* Geography info */}
                    <li className="flex items-center justify-between">
                        Origin Country{' '}
                        <span>{shipment.originCountry}</span>{' '}
                    </li>
                    <li className="flex items-center justify-between">
                        Origin Port{' '}
                        <span>{shipment.originPort ?? 'Unknown'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Destination Country{' '}
                        <span>{shipment.destinationCountry}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Destination Port <span>{shipment.destinationPort}</span>
                    </li>
                </ul>
                <ul>
                    {/* Logistics info */}
                    <li className="flex items-center justify-between">
                        Transportation mode <span>{shipment.mode}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        ProductIds <span>{shipment.productIds.join(', ')}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Carrier <span>{shipment.carrier}</span>
                    </li>
                </ul>
                <ul>
                    {/* Transport timeline  */}
                    <li className="flex items-center justify-between">
                        Purchase Date{' '}
                        <span>{shipment.purchaseDate ?? 'Undefined'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Dispatch - Planned{' '}
                        <span>{shipment.dispatchPlanned ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Dispatch - Actual{' '}
                        <span>{shipment.dispatchActual ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Arrival Country - Planned{' '}
                        <span>{shipment.arrivalCountryPlanned ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Arrival Country - Actual{' '}
                        <span>{shipment.arrivalCountryActual ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Customs Arrival - Planned{' '}
                        <span>{shipment.customsArrivalPlanned ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Customs Arrival - Actual{' '}
                        <span>{shipment.customsArrivalActual ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Customs Detain Timestamp{' '}
                        <span>{shipment.customsDetainTimestamp ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Customs Clear - Planned{' '}
                        <span>{shipment.customsClearPlanned ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Customs Clear - Actual{' '}
                        <span>{shipment.customsClearActual ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Arrival Logistic Center - Planned{' '}
                        <span>{shipment.toLogisticCenterPlanned ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Arrival Logistic Center - Actual{' '}
                        <span>{shipment.toLogisticCenterActual ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Arrival to Consumer - Planned{' '}
                        <span>{shipment.toConsumerPlanned ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Arrival to Consumer - Actual{' '}
                        <span>{shipment.toConsumerActual ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Delivery - Planned{' '}
                        <span>{shipment.deliveryPlanned ?? '?'}</span>
                    </li>
                    <li className="flex items-center justify-between">
                        Delivery - Actual{' '}
                        <span>{shipment.deliveryActual ?? '?'}</span>
                    </li>
                </ul>
                <ul>
                    {/* ETA & revisions */}
                    <li>
                        ETA Destination Country{' '}
                        <span>{shipment.etaDestinationCountry ?? '?'}</span>
                    </li>
                    <li>
                        {/* this is a calculated field ssr*/}
                        ETA Revisions{' '}
                        <span>{shipment?.etaRevisions?.join(', ') ?? '?'}</span>
                    </li>
                    <li>
                        {/* this is a calculated field ssr*/}
                        current Stage <span>{shipment.currentStage}</span>
                    </li>
                </ul>
                <ul>
                    {/* Risk assessment and Contextual risk factors */}
                    <li>
                        riskLevel <span>{shipment.riskLevel ?? '?'}</span>
                    </li>
                    <li>
                        externalContext{' '}
                        <pre>
                            {JSON.stringify(shipment.externalContext, null, 2)}
                        </pre>
                    </li>
                </ul>
            </ul>
        </article>
    )
}

export default ShipmentItem
