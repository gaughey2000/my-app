import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Card from "./Card/Card";
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import Contact from "./Contact/contact";
import AboutMe from "./AboutMe/AboutMe";
import Home from "./Home/Home";
import { Routes, Route } from "react-router";
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contactme" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
