import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import Views from "./Views";

import Home from "./Views/Postlogin/Home";
import AboutUs from "./Views/Postlogin/AboutUs";
import Process from "./Views/Postlogin/Process";
import ContactUs from "./Views/Postlogin/ContactUs/page";
import Login from "./Views/PreLogin/Login";

import usePageTitle from "./Hooks/usePageTitle";


function App() {

  return (
    <Router>
      <div className="App">
        {window.location.pathname !== "/auth/signup" &&
          window.location.pathname !== "/auth/signin" &&
          window.location.pathname !== "/auth/forgot-password" && <Header />}
        <MainContent />
        <Footer/>
      </div>
    </Router>
  );
}
function MainContent() {
  const location = useLocation();
  usePageTitle();

  return (
    <>
      {/* {location.pathname !== "/auth/signup" &&
        location.pathname !== "/auth/signin" &&
        location.pathname !== "/auth/forgot-password" && (
          <Header key={location.pathname} />
        )} */}
      <Routes>
        <Route path="*" element={<Views />} />
      </Routes>
    </>
  );
}
export default App;
