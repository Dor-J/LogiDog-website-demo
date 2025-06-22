import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { storageService } from '~/services/async-storage.service'
import type { Shipment } from '~/models/shipment'

const ENTITY_TYPE = 'shipments'

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const shipment = await storageService.get<Shipment>(
            ENTITY_TYPE,
            params.id
        )
        return NextResponse.json(shipment)
    } catch {
        return NextResponse.json(
            { error: 'Shipment not found' },
            { status: 404 }
        )
    }
}
