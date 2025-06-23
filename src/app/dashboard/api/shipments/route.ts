import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { Shipment } from '~/models/shipment'
import { storageService } from '~/services/async-storage.service'

const ENTITY_TYPE = 'shipments'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)

    // Optional filters
    const riskLevel = searchParams.get('riskLevel')
    const mode = searchParams.get('mode')
    const origin = searchParams.get('origin')
    const destination = searchParams.get('destination')

    try {
        let shipments = await storageService.query<Shipment>(ENTITY_TYPE)

        if (riskLevel && riskLevel !== 'All') {
            shipments = shipments.filter(
                (s) => (s.riskLevel ?? 'None') === riskLevel
            )
        }
        if (mode && mode !== 'All') {
            shipments = shipments.filter(
                (s) => s.mode.toLowerCase() === mode.toLowerCase()
            )
        }
        if (origin) {
            shipments = shipments.filter((s) =>
                s.originCountry.toLowerCase().includes(origin.toLowerCase())
            )
        }
        if (destination) {
            shipments = shipments.filter((s) =>
                s.destinationCountry
                    .toLowerCase()
                    .includes(destination.toLowerCase())
            )
        }

        return NextResponse.json(shipments)
    } catch {
        return NextResponse.json(
            { error: 'Shipments not found' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const shipmentData = (await request.json()) as Omit<Shipment, '_id'>
        // TODOs: Here validation for shipmentData

        // Create new shipment
        const newShipment = await storageService.post<Shipment>(
            ENTITY_TYPE,
            shipmentData
        )

        return NextResponse.json(newShipment, { status: 201 })
    } catch {
        return NextResponse.json(
            { error: 'Invalid shipment data' },
            { status: 400 }
        )
    }
}
