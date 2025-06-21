# In-Depth Problem Understanding and Logical Solution Proposal

> Analysis of Delay Factors: Briefly describe the common and potential causes of shipment delays for a logistics company of this scale.
> Focus on both operational factors and external factors.

    My root cause analysis:
        1. why are there delay in shipment?
            Shipment can get delayed by:
            a. It is stuck in origin country due to regulation or lack of staff to handle shipment .
            b. The shipment is delayed on it's way due to: weather, sea traffic etc.
            c. shipment arrived to country but its stalled before customs due to problems like the port being too crowded or by local logistic staffing problems.
            d. shipment arrived and is delayed at custom for either a regular examinatnion or it is detained or lacks documentation.
            e. shimpment has left customs and now is transported on land and is delayed by land transportation reasons like bad weather, lack of enough tranporters trucks
        2. Dividing the problems operational factors and external factors in a table

| Stage                  | Operational factors              | External factors        |
| :--------------------- | :------------------------------- | :---------------------- |
| Pre-shipment           | Lack of staff to handle shipment | Regulation              |
| During shipment        | Sea traffic                      | Bad weather             |
| Arrival pre-customs    | Local logistic staffing problems | Port being too crowded  |
| At customs             | Lacks of documentation           | Regular examinatnion    |
| Transport post-customs | Lack of enough tranporters       | Bad weather             |
| Local land Transport   |                                  | Long distance from port |

> Early Delay Identification Logic: Present a simple flowchart or a clear textual
> description outlining your proposed logic for early delay identification.
> (For example: "If the delivery date is within X upcoming days, and the shipment is
> still in stage Y, then trigger an alert.")

     The flowchart is presented in the ShimpentsDelayFlows componet

> What types of data (existing or to be collected) could serve as
> strong indicators for accurate delay prediction? Explain the
> rationale for each data type.

    In order to etimate succesfully the delay of shimpment and train ML models is importatnt to gather robust data for each shipment
    General data:
        1. Buyer and Seller
        2. Country of origin / port of departure
        3. Destination country for delivery
        4. Shipment over-seas or air - Mode
        5. Products shipped (an _id for the object of products)
        6. Shipment company - Carrier / Partner
        7. Current shipment stage (string)


    Dates (if date is null it means that the stage wasnt reached ):
        1. Purchess date
        2. Dispatch date shipment start date
        3. Arrive at designation country
        4. Arrive to customs
        5. Customs detain
        6. Customs clear
        7. Transport to logistic center
        8. Transport to consumer
        9. User pickup - shipment delivered

    External Context - flags on shipment creation
        1. Weather along route (seven-day forecast & severe alerts)
        2. Public holidays & strikes for origin and destination
        3. Macro events (war conflicts, pandemics)

> Considering a future implementation of a Machine Learning
> (ML) model: Which existing data fields, or fields that need to be
> specifically collected, would be critical for training such a model?
> Explain why

    Data collection and data quality is an important part of the training of ML model for estimations.
    In order for the model to be successful estimate delay the macro events and dynamic between countries, carriers to identify maco event effect that could be pre detected - understanding the effects of macro events on the potential delays.
    Additionally the data of dates on each stage completion is crucial to do the accurate analysis of ship-deliver ratio quality and also improve the thresholds for better prediction  of delays.

> Alert Triggering Approach: Would you prefer alerts to be
> triggered by rule-based mechanisms or dynamic analysis (e.g.,
> a basic statistical/ML model)? Explain the advantages and
> disadvantages of each approach in the context of this initial
> logistics system, and justify your choice.

    In my opinion there is a place for both rule-based mechanisms or dynamic analysis.
    Rule-based mechanism are better for realtime analysis of the events data sent on each stage in the shipment life cycle.
    The rules based mechnism can also be optimized  after collecting enough data, by optimized the thresholds of potential delayed shipment and trigger alerts
    Dynamic analysis is better use on bigger data set and done "offline" on clusters using kafka and pyspark or a different provider, analysing the data collected for a large data-warehouse or data-lake can provide deeper insights on delay detection and prevention also allowing to preform a/b testing on real data collected to determine if actions taken to prevent delay have the desired effect and this be able to make data driven decisions.
