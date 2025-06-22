import React from 'react'
import type { Shipment } from '~/models/shipment'
import ShipmentItem from './ShipmentItem'

interface Props {
    shipment: Shipment
    onClose: () => void
}

export default function ShipmentModal({ onClose, shipment }: Props) {
    return (
        <section
            className="bg-opacity-50 fixed inset-0 z-50 flex max-h-dvh items-center justify-center bg-sky-900"
            onClick={onClose} // clicking outside closes modal
        >
            <div
                className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded bg-white p-6"
                onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
            >
                <button
                    onClick={onClose}
                    className="float-right text-lg font-bold"
                >
                    &times;
                </button>
                <ShipmentItem shipment={shipment} />
            </div>
        </section>
    )
}
