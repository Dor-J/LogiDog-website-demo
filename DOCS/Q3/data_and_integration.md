#### Navigation back to main readme

[Back to README](../../README.md)

# Sample Data and Integration

> Fictitious Data Creation: Create a data table (JSON or SQL table(s)) for at least
> 15 sample shipments, where some exhibit potential "delay" scenarios that align
> with your created logic and design. Ensure all fields defined in your screen
> design are included.

    Used src\utils\generateShipments.ts script to generate the shipments with different stages, some with delay indicators (e.g., customs detain, late actual dates).

    The data is use in the Dashbpard page and as a json file in this folder

    Additionaly the shipment data is displayed using the shipment modal that renders the shipment item

> API Design: Please design an API that will serve the client. Focus on input and
> output format and communication protocol.

    I implemented a RestAPI for GET, POST and GET{id}
    I implemented it usign the Next.js api route conventions using NextResponse and NextRequest and used an async data srore to use as DB for this example.

    The GET is also has filter applied on it but this can also be done on the client side to displya to do user the data he needs and not all of it. also The GET uses search params so it can also retrieve a specific shipment by url, this however is currently not implemented on the site demo.

    as can seen in the files:
    src\app\dashboard\api\shipments\route.ts
    src\app\dashboard\api\shipments\[id]\route.ts
