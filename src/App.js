import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import Views from "./Views";
function App() {
  // const location = useLocation();
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