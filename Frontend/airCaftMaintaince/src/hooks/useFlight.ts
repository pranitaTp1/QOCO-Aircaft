import { useCallback, useEffect, useState } from "react";
import { apiClient } from "../network/apiClient";
import {
  Flight,
  FlightMapWorker,
  FlightsByRegistration,
  IFlightMap,
} from "../model/Flights";

export const useFlight = () => {
  const { data, isLoading, error, makeApiRequest } = apiClient();
  const [flightMapData, setFlightMapData] = useState<FlightMapWorker[]>([]);

  const fetchFlight = useCallback(async () => {
    return await makeApiRequest<Flight[]>("flights", { method: "GET" });
  }, [data?.data]);

  const groupByFlightRegistration = useCallback(() => {
    const flightGroupByRegistration: IFlightMap | FlightsByRegistration =
      data?.data?.reduce(
        (acc: FlightsByRegistration[] | any, flight: Flight) => {
          if (!acc[flight.registration]) {
            acc[flight.registration] = [];
          }
          acc[flight.registration].push(flight);

          return acc;
        },
        {}
      );

    const convertMapFlightDataToArr: FlightMapWorker[] =
      flightGroupByRegistration &&
      Object.entries(flightGroupByRegistration).map(
        ([flightRegNum, mapFlightData]) => ({
          flightRegNum,
          mapFlightData,
        })
      );
    setFlightMapData(convertMapFlightDataToArr);
  }, [data?.data]);

  useEffect(() => {
    fetchFlight();
  }, []);
  useEffect(() => {
    groupByFlightRegistration();
  }, [groupByFlightRegistration]);

  return { flightMapData, isLoading, error };
};
