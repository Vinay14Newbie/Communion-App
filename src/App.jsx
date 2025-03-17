import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Event } from "./pages/Events";
import { About } from "./pages/About";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Event />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
