export type ShipmentMode = 'SEA' | 'AIR' | 'RAIL' | 'TRUCK'

export type ShipmentStage =
    | 'Booked'
    | 'Dispatched'
    | 'In-Transit'
    | 'ArrivedDestinationCountry'
    | 'Customs'
    | 'ReleasedFromCustoms'
    | 'ToLogisticCenter'
    | 'ToConsumer'
    | 'Delivered'

export interface ExternalContext {
    // Free-text weather status or null
    weatherAlert: string | null
    // True if a public holiday overlaps the ETA
    publicHoliday: boolean
    // True if an ongoing strike affects the route
    strike: boolean
    // e.g. 'pandemic', 'armed-conflict', or null
    macroEvent: string | null
}

export interface Shipment {
    //  IDs
    _id: string //shipmentId
    buyerId: string
    sellerId: string

    // Geography
    originCountry: string
    originPort?: string
    destinationCountry: string
    destinationPort: string

    // Logistics
    mode: ShipmentMode
    productIds: string[]
    carrier: string
    currentStage: ShipmentStage

    // Commercial milestone
    purchaseDate?: string | null

    // Transport timeline (planned vs. actual)
    dispatchPlanned?: string | null
    dispatchActual?: string | null

    arrivalCountryPlanned?: string | null
    arrivalCountryActual?: string | null

    customsArrivalPlanned?: string | null
    customsArrivalActual?: string | null
    customsDetainTimestamp?: string | null

    customsClearPlanned?: string | null
    customsClearActual?: string | null

    toLogisticCenterPlanned?: string | null
    toLogisticCenterActual?: string | null

    toConsumerPlanned?: string | null
    toConsumerActual?: string | null

    deliveryPlanned?: string | null
    deliveryActual?: string | null

    // ETA & revisions
    etaDestinationCountry?: string | null
    etaRevisions?: string[]

    // Risk assessment
    riskLevel?: 'High' | 'Medium' | 'Low' | 'None'

    // Contextual risk factors
    externalContext: ExternalContext
}
