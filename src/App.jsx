import "./App.css";
import Blog from "./components/blog/Blog";
import Choose from "./components/choose/Choose";
import Footer from "./components/footer/Footer";
import Footerstrip from "./components/footerstrip/Footerstrip";
import Form from "./components/form/Form";
import Herosection from "./components/herosection/Herosection";
import Navstrip from "./components/navstrip/Navstrip";
import Points from "./components/points/Points";
import Potential from "./components/potential/Potential";
import Service from "./components/servicegrid/Service";
import Why from "./components/why/Why";
import Approach from "./components/approach/Approach";
import Count from "./components/count/Count";
import Serve from "./components/serve/Serve";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppContent() {
  return (
    <>
      <Navstrip />
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            {/* <Approach /> */}
            <Serve />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
     
      <Count />
      <Why />
      <Potential />
      <Blog />
      <Form />
      <Footer /> 
      <Footerstrip />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
