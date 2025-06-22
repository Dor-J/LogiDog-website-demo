#### Navigation back to main readme

[Back to README](../../README.md)

# Business background

> LogiDog is a high-volume, global logistics provider

    Logistics industry, B2B

> Handling thousands of shipments every day—from consumer goods to medical devices.

    Products shipped are medical devices, these are sensitive devices
    Daily workload:

        Thousands of shipments every day
        If each shipments has at least 5 stages of shipment than its millions of updates every day

> Customer complaints about late deliveries are rising, but the operations team lacks a fast, reliable way to spot at-risk shipments early and understand why delays occur.

    Problem: Complaints about late deliveries are rising
    Technical problem:
        Operations team lacks a fast, reliable way to spot at-risk shipments early
            The team needs an autonomous process that checks daily on each shipment in a cluster and sends a notification / push event to inform the team of at-risk shipments and notify users via an easy to understand UI.
        No understanding why delays occur.
            There is a need to store high quality logging data for each shipment and run it through a regression model to look for anomalies

> The mission: build a lightweight “Delay Early-Warning System” that (1) flags shipments likely to miss their promised delivery date and (2) surfaces the key drivers of those delays, so the team can intervene before customers are affected.

    MVP: Lightweight “Delay Early-Warning System”
        1. Flags shipments likely to miss their promised delivery date
           This involves creating an algorithm to predict at-risk shipments and also tagging data as it goes through the data pipelines
           For logging if we can consider build vs buy it is possible to use a solution like Datadog for logging and monitoring.
        2. Surfaces the key drivers of those delays
            Through monitoring shipments and improving the prediction algorithm in iterations the reason for delay will become clearer.
            Also once enough data is collected we can use it to detect hot spots of delay by crossing different parameters like comparing sheepment delays by county of origin, county to deliver, date of initial shipment, seasonal effects and so on, this way we can analyze exactly the hot spots of delays
