import "./App.css";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import TimelineScreen from "./screens/TimelineScreen";

function App() {
  return (
    <Container fixed>
      <Header />
      <TimelineScreen />
    </Container>
  );
}

export default App;
