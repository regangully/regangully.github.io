import "./App.css";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

import Container from "./Components/Container/Container";
import Navigation from "./Components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import useGlobalStore from "./Store/GlobalStore";
import shallow from "zustand/shallow";

function App() {
  const { alternateBackground } = useGlobalStore(
    (state) => ({
      alternateBackground: state.alternateBackground,
    }),
    shallow
  );

  return (
    <div className="App">
      <Container>
        <Navigation
          alternateBackground={alternateBackground}
          routes={[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Work", path: "/work" },
            { label: "Contact", path: "/contact" },
          ]}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
