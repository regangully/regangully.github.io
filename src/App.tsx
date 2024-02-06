import "./App.css";
import Work from "./Pages/Work/Projects";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Navigation from "./Components/Navigation/Navigation";
import { Outlet, Route, Routes } from "react-router-dom";
import useGlobalStore from "./Store/GlobalStore";
import shallow from "zustand/shallow";
import MemoriesPrivacy from "./Pages/Projects/Memories/MemoriesPrivacy";
import MemoriesContact from "./Pages/Projects/Memories/MemoriesContact";
import Main from "./Pages/Main";

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
          { label: "Home", path: "#" },
          { label: "About", path: "#about" },
          { label: "Projects", path: "#projects" },
          { label: "Experience", path: "#experience" },
        ]}
        actions={[
          // { label: "Blog", path: "/blog" },
        ]}
      />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavigationRoutes />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/memories/privacy" element={<MemoriesPrivacy />} />
        <Route path="/memories/contact" element={<MemoriesContact />} />
      </Routes>
    </div>
  );
}

export default App;
