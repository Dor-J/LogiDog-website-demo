'use client'
import React from 'react'
import { isShipmentAtRiskTest } from '../../utils/shipmentRisk'

function RiskAssesmentButton() {
    return (
        <button
            className="my-4 rounded-2xl bg-emerald-300 px-5 py-2 text-black transition-all hover:bg-emerald-500"
            onClick={() => isShipmentAtRiskTest()}
        >
            Risk Assesment Button
        </button>
    )
}

export default RiskAssesmentButton
