import "./App.css";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

import Container from "./Components/Container/Container";
import Navigation from "./Components/Navigation/Navigation";
import { Outlet, Route, Routes } from "react-router-dom";
import useGlobalStore from "./Store/GlobalStore";
import shallow from "zustand/shallow";
import MemoriesPrivacy from "./Pages/Projects/Memories/MemoriesPrivacy";
import MemoriesContact from "./Pages/Projects/Memories/MemoriesContact";

const NavigationRoutes = () => {
  const { alternateBackground } = useGlobalStore(
    (state) => ({
      alternateBackground: state.alternateBackground,
    }),
    shallow
  );

  return (
    <>
      <Navigation
        alternateBackground={alternateBackground}
        routes={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Work", path: "/work" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<NavigationRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/memories/privacy" element={<MemoriesPrivacy />} />
          <Route path="/memories/contact" element={<MemoriesContact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
