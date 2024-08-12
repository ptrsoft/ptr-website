import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Views from "./Views";
import ScrollToTop from "./Hooks/ScrollToTop";


function App() {

  return (
    <Router>
      <ScrollToTop/>
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
