#### Navigation back to main readme

[Back to README](../../README.md)

# Implement Delay Logic

> Write a small code snippet (in any language of your choice) that:

    1. Defines a function (e.g., isShipmentAtRisk(shipmentData)).
        This function is defined at file:
        src\utils\shipmentRisk.ts

    2. Function should take a single shipment object
        The shipment object model is at file:
        src\models\shipment.d.ts

    3. Implement your proposed logic from Section 1 (e.g., "If deliveryDate is within X days AND currentStage is not Y")
    to determine if the shipment is at risk of delay
        This function is defined at file:
        src\utils\shipmentRisk.ts

    4. Function should return true if the shipment is at risk, and false otherwise
        The function is called pressing the Risk Assesment Button
        src\app\components\RiskAssesmentButton.tsx

    5. Provide example calls to this function with 2-3 different shipment objects from
    your sample data, demonstrating both "at risk" and "not at risk" scenarios, and print the results.
        Results are displayed in the picture and in the home page pressing the Risk Assesment Button
