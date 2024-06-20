import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import SocialLinks from "./Pages/Home/SocialLinks";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects";
import "aos/dist/aos.css";
import { useEffect } from "react";

const getTitle = (pathname) => {
  switch (pathname) {
    case "/ ":
      return "Portfolio of Sevinch(sardorovnass).";
    case "/contact":
      return "Portfolio of Sevinch(sardorovnass).";
    case "/about":
      return "Portfolio of Sevinch(sardorovnass).";
    case "/projects":
      return "Portfolio of Sevinch(sardorovnass).";

    default:
      return "Portfolio of Sevinch(sardorovnass).";
  }
};

const getDescription = (pathname) => {
  switch (pathname) {
    case "/":
      return "Welcome to the Portfolio of Sevinch Sayfutdinova.";
    case "/contact":
      return "Get in touch with me through my contact page.";
    case "/about":
      return "Learn more about me and my mission.";
    case "/projects":
      return "Explore my projects and see what I've been working on.";
    default:
      return "Portfolio of Sevinch(sardorovnass).";
  }
};
function App() {
  const { pathname } = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
        disable: function () {
          var maxWidth = 800;
          return window.innerWidth < maxWidth;
        },
      });
    };
    loadAOS();
  }, []);
  return (
    <>
      <Helmet>
        <title>{getTitle(pathname)}</title>
        <meta name="description" content={getDescription(pathname)} />
      </Helmet>

      <SocialLinks />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
