import { FlightsContext } from "./FlightsContext";
import { useFlight } from "../hooks/useFlight";

const FlightContextProvider = ({ children }:any) => {
    const {isLoading,error,flightMapData} = useFlight();
    return (
      <FlightsContext.Provider value={{flightMapData:flightMapData, isLoading:isLoading,error:error}}>
        {children}
      </FlightsContext.Provider>
    );
  };
  export default FlightContextProvider;