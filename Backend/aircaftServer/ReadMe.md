
## Backend

## Technology stack
- express
- node
- Typescript
- sequelize/sqlite

## To run server follow below command:
- cd Backend/aircaftServer
- npm i
- npm start dev
- open in browser localhost://3000/


## Note: To insert data in dev.sqlite database, follow below steps:
- Install postman
-![Post flight query](insertFlightsQueryPostman.png)
    # Enter url: http://localhost:3000/flights
    # Select method: Post
    # Selct body-> raw -> copy flights.json data 
    # click send button
    # Data will get inserted into [dev.sqlite] db

-![Get flights query ](getFlightsQueryPostman.png)