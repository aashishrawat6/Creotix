import "./App.css";
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingFallback from "./components/Loader/LoadingFallback";
// Lazy load components
const LazyBlog = lazy(() => import("./components/blog/Blog"));
const LazyChoose = lazy(() => import("./components/choose/Choose"));
const LazyFooter = lazy(() => import("./components/footer/Footer"));
const LazyFooterstrip = lazy(() => import("./components/footerstrip/Footerstrip"));
const LazyForm = lazy(() => import("./components/form/Form"));
const LazyHerosection = lazy(() => import("./components/herosection/Herosection"));
const LazyNavstrip = lazy(() => import("./components/navstrip/Navstrip"));
const LazyPoints = lazy(() => import("./components/points/Points"));
const LazyPotential = lazy(() => import("./components/potential/Potential"));
const LazyService = lazy(() => import("./components/servicegrid/Service"));
const LazyWhy = lazy(() => import("./components/why/Why"));
const LazyApproach = lazy(() => import("./components/approach/Approach"));
const LazyCount = lazy(() => import("./components/count/Count"));
const LazyServe = lazy(() => import("./components/serve/Serve"));
const LazyNavbar = lazy(() => import("./components/navbar/Navbar"));
const LazyHome = lazy(() => import("./pages/Home"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyServices = lazy(() => import("./pages/Services"));

// Loading component
// const LoadingFallback = () => (
//   <div style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '10vh',
//     width: '100%',
//   }}>
//     <div>Loading...</div>
//   </div>
// );

// Common layout component
const CommonLayout = ({ children }) => (
  <>
    <LazyNavstrip />
    <LazyNavbar />
    {children}
    <LazyCount />
    <LazyWhy />
    <LazyPotential />
    <LazyBlog />
    <LazyForm />
    <LazyFooter />
    <LazyFooterstrip />
  </>
);

function AppContent() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route 
          path="/" 
          element={
            <CommonLayout>
              <LazyHome />
              <LazyApproach />
              <LazyServe />
            </CommonLayout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <CommonLayout>
              <LazyAbout />
            </CommonLayout>
          } 
        />
        <Route 
          path="/services" 
          element={
            <CommonLayout>
              <LazyServices />
            </CommonLayout>
          } 
        />
      </Routes>
    </Suspense>
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
