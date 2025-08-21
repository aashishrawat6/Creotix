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
function App() {
  return (
    <>
      <Navstrip />
      <Herosection />
      <Points />
      <Service />
      <Why />
      <Approach />
      <Potential />
      <Blog />
      <Form />
      <Footer />
      <Footerstrip />
    </>
  );
}
{/* <Choose/> */}

export default App;
