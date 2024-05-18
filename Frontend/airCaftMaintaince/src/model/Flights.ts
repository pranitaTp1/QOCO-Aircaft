export type Flight = {
        flightId: string,
        airline: string,
        registration: string,
        aircraftType: string,
        flightNum: string,
        schedDepTime: Date,
        schedArrTime: Date,
        actualDepTime: string,
        actualArrTime: string,
        estimatedDepTime: string,
        estimatedArrTime: string,
        schedDepStation: string,
        schedArrStation: string,
        depStand: string,
        origDepStand: string
}
export type FlightsByRegistration = {
    flightRegNum:string,
    mapFlightData: Flight[]
}

export type IFlightMap = {
    [index: number]: FlightsByRegistration
}

export type FlightMapWorker = FlightsByRegistration & IFlightMap;