import type { Shipment } from '~/models/shipment'

/**
 * Determines if a shipment is at risk of delay.
 * If
 *      deliveryPlanned is within next X days (e.g., 7 days)
 * AND
 *      currentStage is not 'Delivered'
 * Then
 *      shipment is considered at risk.
 *
 * This function includes basic ruleing for determining if there will be a delay and it can surely be optimized
 */

const oneDayInMs = 24 * 60 * 60 * 1000

export function isShipmentAtRisk(
    shipment: Shipment,
    daysThreshold = 7
): boolean {
    try {
        if (
            !shipment ||
            typeof shipment !== 'object' ||
            !shipment.deliveryPlanned ||
            typeof shipment.deliveryPlanned !== 'string' ||
            !shipment.currentStage
        ) {
            // Invalid input or missing required fields
            return false
        }

        const now = new Date()
        const deliveryDate = new Date(shipment.deliveryPlanned)

        if (isNaN(deliveryDate.getTime())) {
            // Invalid deliveryPlanned date string
            return false
        }

        const daysUntilDelivery =
            (deliveryDate.getTime() - now.getTime()) / oneDayInMs

        // Trigger if less than 7 days and not yet deliverd
        return (
            daysUntilDelivery <= daysThreshold &&
            shipment.currentStage !== 'Delivered'
        )
    } catch (error) {
        // Log or handle error if desired
        console.log(error)
        return false
    }
}

export function isShipmentAtRiskTest() {
    // Sample data to test
    const shipment1: Shipment = {
        _id: 'abc123',
        deliveryPlanned: new Date(Date.now() + 3 * oneDayInMs).toISOString(), // 3 days from now
        currentStage: 'In-Transit'
    } as Shipment

    const shipment2: Shipment = {
        _id: 'def456',
        deliveryPlanned: new Date(Date.now() + 10 * oneDayInMs).toISOString(), // 10 days from now
        currentStage: 'In-Transit'
    } as Shipment

    const shipment3: Shipment = {
        _id: 'ghi789',
        deliveryPlanned: new Date(Date.now() + 2 * oneDayInMs).toISOString(), // 2 days from now
        currentStage: 'Delivered'
    } as Shipment
    const shipment4: Shipment = {
        _id: 'ghi7489',
        deliveryPlanned: new Date(Date.now() + 2 * oneDayInMs).toISOString(), // 2 days from now
        currentStage: 'ArrivedDestinationCountry'
    } as Shipment
    const shipment5: Shipment = {
        _id: 'ghi739',
        deliveryPlanned: new Date(Date.now() + 2 * oneDayInMs).toISOString(), // 2 days from now
        currentStage: 'ToLogisticCenter'
    } as Shipment

    // Test calls
    console.log(`
        'Shipment 1: ',
        ${isShipmentAtRisk(shipment1)},
        'Expect: true (3 days, not delivered)'
    
        'Shipment 2: ',
        ${isShipmentAtRisk(shipment2)},
        'Expect: false (10 days, not delivered)'
    
        'Shipment 3: ',
        ${isShipmentAtRisk(shipment3)},
        'Expect: false (2 days but delivered)'
    
        'Shipment 4: ',
        ${isShipmentAtRisk(shipment4)},
        'Expect: true (2 days not delivered)'
    
        'Shipment 5: ',
        ${isShipmentAtRisk(shipment5)},
        'Expect: true (2 days not delivered)'
    `)
}
