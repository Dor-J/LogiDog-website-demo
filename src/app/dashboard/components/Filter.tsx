'use client'

import React, { useState } from 'react'

export interface FilterValues {
    riskLevel: string
    mode: string
    origin: string
    destination: string
}

export interface FilterProps {
    onSearch: (f: FilterValues) => void
}

const Filter: React.FC<FilterProps> = ({ onSearch }) => {
    const [riskLevel, setRiskLevel] = useState<string>('All')
    const [mode, setMode] = useState<string>('All')
    const [origin, setOrigin] = useState<string>('')
    const [destination, setDestination] = useState<string>('')

    const handleSearch = () =>
        onSearch({ riskLevel, mode, origin, destination })

    return (
        <div className="max-h-96 w-full max-w-xs space-y-3 rounded-lg bg-gray-800 p-4 text-white">
            <h3 className="text-xl font-semibold">Filters</h3>

            {/* Risk Level */}
            <div className="flex flex-col">
                <label htmlFor="riskLevel" className="mb-1 text-sm font-medium">
                    Risk Level
                </label>
                <select
                    id="riskLevel"
                    value={riskLevel}
                    onChange={(e) => setRiskLevel(e.target.value)}
                    className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-sm"
                >
                    <option>All</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>

            {/* Mode */}
            <div className="flex flex-col">
                <label htmlFor="mode" className="mb-1 text-sm font-medium">
                    Mode
                </label>
                <select
                    id="mode"
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-sm"
                >
                    <option>All</option>
                    <option>Sea</option>
                    <option>Air</option>
                    <option>Rail</option>
                    <option>Truck</option>
                </select>
            </div>

            {/* Origin */}
            <div className="flex flex-col">
                <label htmlFor="origin" className="mb-1 text-sm font-medium">
                    Origin
                </label>
                <input
                    id="origin"
                    type="text"
                    placeholder="All"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-sm"
                />
            </div>

            {/* Destination */}
            <div className="flex flex-col">
                <label
                    htmlFor="destination"
                    className="mb-1 text-sm font-medium"
                >
                    Destination
                </label>
                <input
                    id="destination"
                    type="text"
                    placeholder="All"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="rounded border border-gray-600 bg-gray-700 px-2 py-1 text-sm"
                />
            </div>

            {/* Search button */}
            <button
                onClick={handleSearch}
                className="w-full rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
                Search
            </button>
        </div>
    )
}

export default Filter
