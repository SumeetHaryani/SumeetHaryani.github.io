import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "./App.scss";
import NavBar from "./components/NavBar";
import { UserContext } from "./context/User";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
export default function App() {
  const [loading, setLoading] = useState(true);

  const profile = useContext(UserContext);
  useEffect(() => {
    if (Object.keys(profile).length) {
      setLoading(false);
    }
  }, [profile]);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    library.add(fab);
  }, []);
  return (
    <>
      <NavBar />
      <div className="App">
        <div className="main-content">
          {loading ? (
            <div className="loader">
              <Loader
                type="Oval"
                color="#037fff"
                children={"Loadding.."}
              />
              Loading...
            </div>
          ) : (
            <div className="content">
              <HomePage />
              <PortfolioPage />
              <AboutPage />
              <ContactPage />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
