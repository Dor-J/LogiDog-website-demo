#### Navigation back to main readme

[Back to README](../../README.md)

# User Interface (UX/UI) Design for a Primary Alerts Screen

> Visual Design: Design a single blocks screen (Dashboard) for the system (you
> can use Draw.io/Canva/Miro). The screen should include:

    1. A clear list of at-risk shipments.
    2. Filtering and Search Capabilities
    3. Visual Indicators.

        Dashboard in displayed in the dashboard page and also a png

> Real-time Data Updates: Choose a communication approach to
> ensure the dashboard data is as up-to-date as possible. Explain
> your chosen approach and justify why it's the best fit for this
> system.

    In order to design the real time data updates architecture we must consider the payloads, uptime and distribusion requirments of the system,
    The system need to handle minions of updates events each day through the datapipes and on the server monitor and approve events and also update the clients on updates. So the architecture needs to include a load balancer connected to a few lamda instances or docker with service worker that process the data and by using a pub sub system each client subscrible to updates on he's shipments and get them in almost realtime with using sockets like socket.io and a client service worker ready to listen to push events from the server/lamda updating the client UI in neer realtime.
    Also its very important that after initial processing the data goes theough ETL (extract ,tranform, load) so the data is stored in a data warehouse or a data lake.

> Data Structure for Display: Which data structure (schema) is
> most suitable for displaying this type of data on the screen?
> Would you prefer a Normalized or Denormalized structure?
> Provide a brief example. Explain the advantages of your chosen
> approach for this scenario.

    (Personaly coming from a java and sql background I think the data should be normalized and using a sql based database like postgress, but for MVP using a NoSQL database like MongoDB and Denormalized data meaning object models is possibly too.)
    For displaying the data on screen I think a table would have the best UX letting the users use the website that is intuitive to them and easy to filter their data and get insights.
    My chosen approch is displaying the data in a table as can be seen on the Dashboard page
