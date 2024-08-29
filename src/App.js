import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
