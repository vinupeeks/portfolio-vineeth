import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particlesConfig from "./utils.js/particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
// import { loadFull } from "tsparticles";
// import { tsParticles } from "tsparticles-engine";
// import particles from "./utils.js/particles";
// import ProfileLinks from "./containers/profile";
// import Footer from "./components/footer";
import "./App.scss";
import PageNotFound from "./components/PageNotFound";

function App() {
  const location = useLocation();
  // console.log(location);
  // const handleInit = async (main) => {
  //   await loadFull(main);
  // };
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);
  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="tsParticles" options={particlesConfig} init={particlesInit} loaded={particlesLoaded} />
      )}

      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="/profile" element={<ProfileLinks />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
