import { Timeline } from "@mui/lab";
import TimelineCard from "./TimelineCard";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FlightMapWorker } from "../../model/Flights";
import { useContext } from "react";
import { FlightsContext } from "../../context/FlightsContext";
import { Alert } from "@mui/material";
import { API_ERROR, NO_DATA, PROVIDER_ERROR } from "../../utils/commonMessage";

const AirCaftTimeLine = () => {
  const flightContext = useContext(FlightsContext);

  if (!flightContext) {
    throw new Error(
      PROVIDER_ERROR
    );
  }

  if (flightContext.isLoading) {
    return <CircularProgress color="secondary" />;
  }
  if (flightContext.error) {
    return (
      <Alert severity="error">
        {API_ERROR}
      </Alert>
    );
  }
  return (
    <Box sx={{ width: "100%" }}>
      {!flightContext.isLoading && flightContext?.flightMapData?.length > 0 ? (
        <Timeline>
          {flightContext.flightMapData?.map(
            (flightWorker: FlightMapWorker, index) => {
              return (
                <TimelineCard
                  key={flightWorker?.flightRegNum + "-" + index}
                  registration={flightWorker?.flightRegNum}
                  flight={
                    flightWorker?.mapFlightData
                      ? flightWorker?.mapFlightData
                      : []
                  }
                />
              );
            }
          )}
        </Timeline>
      ): <Alert severity="info">
     {NO_DATA}
    </Alert>}
    </Box>
  );
};

export default AirCaftTimeLine;
