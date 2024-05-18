
import  { createContext } from 'react';
import { FlightMapWorker } from '../model/Flights';

interface FlightContextType {
    flightMapData:FlightMapWorker[],
    isLoading: boolean,
    error:any
}

export const FlightsContext = createContext<FlightContextType | null>(null);