import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import { Airlines } from "@mui/icons-material";
import { Flight } from "../../model/Flights";
import React from "react";
import CardContent from "./CardContent";

type TimelineCardProps = {
  flight: Flight[] | [];
  registration: string;
};

const TimelineCard = ({ flight, registration }: TimelineCardProps) => {
  return (
    <TimelineItem key={registration}>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {registration}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <Airlines />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      {flight &&
        flight.map((flight: Flight) => {
          return <CardContent key={flight.flightId} flight={flight} />;
        })}
    </TimelineItem>
  );
};
export default React.memo(TimelineCard);
