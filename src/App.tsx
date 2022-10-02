import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import EventPage from "./pages/EventPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/event" element={<EventPage />} />
    </Routes>
  )
}


export default App;
