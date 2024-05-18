import { FlightLand, FlightTakeoff, Place } from "@mui/icons-material";
import TimelineContent from "@mui/lab/TimelineContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { formatDate } from "../../utils/utilities";
import { Flight } from "../../model/Flights";
import React from "react";

type CardContentProps = {
  flight: Flight;
};
const CardContent = ({ flight }: CardContentProps) => {
  return (
    <TimelineContent>
      <Card variant="outlined" sx={{ padding: 2, minWidth: 275, width: 300 }}>
        <Typography align="center" color="text.secondary">
          {flight?.flightNum}
        </Typography>
        <Box gap={4} sx={{ display: "flex", justifyContent: "space-around" }}>
          <FlightTakeoff />
          <FlightLand />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-around", paddingY: 2 }}
        >
          <Typography>
            {flight?.schedDepTime ? formatDate(flight?.schedDepTime) : ""}
          </Typography>
          <Typography color="text.secondary">
            {flight?.schedArrTime ? formatDate(flight?.schedArrTime) : ""}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-around", paddingY: 2 }}
        >
          <Typography color="text.secondary">
            <Place />
            {flight?.schedArrStation}
          </Typography>
          <Typography color="text.secondary">
            <Place />
            {flight?.schedDepStation}
          </Typography>
        </Box>
      </Card>
    </TimelineContent>
  );
};
export default React.memo(CardContent);
