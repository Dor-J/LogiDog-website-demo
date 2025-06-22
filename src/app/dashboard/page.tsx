import React from 'react'
import AtRiskShipments from './components/AtRiskShipments'

function DashBoard() {
    return (
        <main className="flex w-full flex-col items-center">
            <div className="p4 my-4 text-center">
                <h1 className="text-3xl font-bold">
                    Shipments Delay Dashboard
                </h1>
            </div>

            {/* Layout: sidebar + table */}
            <AtRiskShipments />
        </main>
    )
}

export default DashBoard
