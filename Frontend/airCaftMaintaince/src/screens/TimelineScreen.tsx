import AirCaftTimeLine from "../components/Timeline/AirCaftTimeLine"
import FlightContextProvider from "../context/FlightContextProvider";

const TimelineScreen = () => {
    return <FlightContextProvider><AirCaftTimeLine/></FlightContextProvider>
}
export default TimelineScreen;