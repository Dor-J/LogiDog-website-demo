import {
    type Shipment,
    type ShipmentMode,
    type ShipmentStage
} from '~/models/shipment'

//  helpers
const randInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min

const randChoice = <T>(arr: readonly T[]): T => {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]!
}

const randomDate = (start: Date, end: Date): Date =>
    new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )

const ISO = (d: Date | null): string | null =>
    d ? d.toISOString().replace(/\.\d{3}Z$/, 'Z') : null // trim ms

//  constants / look-ups
const START = new Date('2024-01-01T00:00:00Z')
const END = new Date('2025-12-31T23:59:59Z')

const modes: ShipmentMode[] = ['SEA', 'AIR', 'RAIL', 'TRUCK']
const stages: ShipmentStage[] = [
    'Booked',
    'Dispatched',
    'In-Transit',
    'ArrivedDestinationCountry',
    'Customs',
    'ReleasedFromCustoms',
    'ToLogisticCenter',
    'ToConsumer',
    'Delivered'
]
const riskLevels = ['High', 'Medium', 'Low', 'None'] as const
const carriers = ['MAERSK', 'MSC', 'UPS', 'FedEx', 'DBSchenker'] as const
const countries = ['CN', 'US', 'DE', 'IL', 'BR', 'IN', 'JP', 'GB'] as const
const ports: Record<(typeof countries)[number], string> = {
    CN: 'CNSHA',
    US: 'USLAX',
    DE: 'DEHAM',
    IL: 'ILASH',
    BR: 'BRSSZ',
    IN: 'INMUM',
    JP: 'JPTYO',
    GB: 'GBFXT'
}

// generator
export function generateShipments(count = 30): Shipment[] {
    const list: Shipment[] = []

    for (let i = 1; i <= count; i++) {
        const origin = randChoice(countries)
        const destination = randChoice(countries.filter((c) => c !== origin))
        const currentStage = randChoice(stages)
        const mode = randChoice(modes)

        /** Helper to see if the random stage has passed a certain milestone */
        const stageIdx = (s: ShipmentStage): number => stages.indexOf(s)
        const hasReached = (idx: number): boolean =>
            stageIdx(currentStage) >= idx

        // — base dates —
        const purchaseDate = randomDate(START, END)
        const dispatchPlanned = randomDate(START, END)
        const arrivalPlanned = new Date(dispatchPlanned.getTime())
        arrivalPlanned.setDate(arrivalPlanned.getDate() + randInt(10, 40))

        // timelines
        const customsPlanned = new Date(arrivalPlanned)
        customsPlanned.setDate(customsPlanned.getDate() + 1)

        const customsClearPlanned = new Date(customsPlanned)
        customsClearPlanned.setDate(customsClearPlanned.getDate() + 2)

        const toLcPlanned = new Date(customsClearPlanned)
        toLcPlanned.setDate(toLcPlanned.getDate() + 1)

        const toConsPlanned = new Date(toLcPlanned)
        toConsPlanned.setDate(toConsPlanned.getDate() + 2)

        const deliveryPlanned = new Date(toConsPlanned)
        deliveryPlanned.setDate(deliveryPlanned.getDate() + 1)

        const shipment: Shipment = {
            // IDs
            buyerId: `B${randInt(10000, 99999)}`,
            sellerId: `S${randInt(10000, 99999)}`,
            _id: `SHIP-${String(i).padStart(5, '0')}`,

            // Geo
            originCountry: origin,
            originPort: ports[origin],
            destinationCountry: destination,
            destinationPort: ports[destination],

            // Logistics basics
            mode,
            productIds: Array.from(
                { length: randInt(1, 3) },
                () => `PRD-${randInt(1, 99).toString().padStart(3, '0')}`
            ),
            carrier: randChoice(carriers),
            currentStage,

            // Commercial
            purchaseDate: ISO(purchaseDate),

            // Timeline (planned & actuals as per stage progression)
            dispatchPlanned: ISO(dispatchPlanned),
            dispatchActual: hasReached(1)
                ? ISO(
                      new Date(
                          dispatchPlanned.getTime() + randInt(0, 2) * 86_400_000
                      )
                  )
                : null,

            arrivalCountryPlanned: ISO(arrivalPlanned),
            arrivalCountryActual: hasReached(3)
                ? ISO(
                      new Date(
                          arrivalPlanned.getTime() + randInt(0, 5) * 86_400_000
                      )
                  )
                : null,

            customsArrivalPlanned: ISO(customsPlanned),
            customsArrivalActual: hasReached(4)
                ? ISO(
                      new Date(
                          customsPlanned.getTime() + randInt(0, 3) * 86_400_000
                      )
                  )
                : null,
            customsDetainTimestamp:
                Math.random() > 0.8
                    ? ISO(new Date(customsPlanned.getTime() + 2 * 86_400_000))
                    : null,

            customsClearPlanned: ISO(customsClearPlanned),
            customsClearActual: hasReached(5)
                ? ISO(
                      new Date(
                          customsClearPlanned.getTime() +
                              randInt(0, 2) * 86_400_000
                      )
                  )
                : null,

            toLogisticCenterPlanned: ISO(toLcPlanned),
            toLogisticCenterActual: hasReached(6)
                ? ISO(
                      new Date(
                          toLcPlanned.getTime() + randInt(0, 1) * 86_400_000
                      )
                  )
                : null,

            toConsumerPlanned: ISO(toConsPlanned),
            toConsumerActual: hasReached(7)
                ? ISO(
                      new Date(
                          toConsPlanned.getTime() + randInt(0, 2) * 86_400_000
                      )
                  )
                : null,

            deliveryPlanned: ISO(deliveryPlanned),
            deliveryActual:
                currentStage === 'Delivered'
                    ? ISO(
                          new Date(
                              deliveryPlanned.getTime() +
                                  randInt(0, 2) * 86_400_000
                          )
                      )
                    : null,

            // ETA
            etaDestinationCountry: ISO(arrivalPlanned),
            etaRevisions: [],

            // Risk
            riskLevel: randChoice(riskLevels),

            // External context
            externalContext: {
                weatherAlert: Math.random() > 0.9 ? 'Storm Warning' : null,
                publicHoliday: Math.random() < 0.1,
                strike: Math.random() < 0.05,
                macroEvent: null
            }
        }

        list.push(shipment)
    }

    return list
}
