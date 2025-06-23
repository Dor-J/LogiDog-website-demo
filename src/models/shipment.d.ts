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

/**
 * Exmple shipment json
 * 
 * {
  "buyerId": "B12345",
  "sellerId": "S67890",
  "_id": "SHIP-00000000001",

  "originCountry": "CN",
  "originPort": "CNSHA",
  "destinationCountry": "US",
  "destinationPort": "NY",

  "mode": "SEA",                // 'SEA' | 'AIR' 

  "productIds": ["PRD-001", "PRD-002"],
  "carrier": "MAERSK",

  "currentStage": "Booked",

  //  Commercial / administrative dates  
  "purchaseDate": "2025-06-03T08:10:00Z",

  //  Transport milestones (planned vs. actual)  
  "dispatchPlanned": "2025-06-05T00:00:00Z",
  "dispatchActual": null,

  "arrivalCountryPlanned": "2025-07-12T00:00:00Z",
  "arrivalCountryActual": null,

  "customsArrivalPlanned": "2025-07-13T00:00:00Z",
  "customsArrivalActual": null,
  "customsDetainTimestamp": null,

  "customsClearPlanned": "2025-07-14T00:00:00Z",
  "customsClearActual": null,

  "toLogisticCenterPlanned": "2025-07-15T00:00:00Z",
  "toLogisticCenterActual": null,

  "toConsumerPlanned": "2025-07-16T00:00:00Z",
  "toConsumerActual": null,

  "deliveryPlanned": "2025-07-17T00:00:00Z",
  "deliveryActual": null,

  //  ETA & revisions  
  "etaDestinationCountry": "2025-07-12T00:00:00Z",
  "etaRevisions": [],

  //  External context flags  
  "externalContext": {
    "weatherAlert": null,
    "publicHoliday": false,
    "strike": false,
    "macroEvent": null
  }
}

 */
