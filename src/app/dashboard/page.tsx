import React from 'react'
import AtRiskShipments from './components/AtRiskShipments'

function DashBoard() {
    return (
        <main className="flex h-lvh w-full flex-col items-center">
            <div className="p4 text-center">
                <h1>Shipments Delay Dashboard</h1>
            </div>

            {/* Layout: sidebar + table */}
            <AtRiskShipments />
        </main>
    )
}

export default DashBoard
