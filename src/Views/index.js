import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Postlogin/Home";
import AboutUs from "./Postlogin/AboutUs";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "../Config/Config";
import Process from "./Postlogin/Process";
import ContactUs from "./Postlogin/ContactUs/page";
import Login from "./PreLogin/Login";
import SaasArchitecture from "./Postlogin/SaasArchitecture";
import Architecture from "./Postlogin/Architecture";

// const Dashboards = lazy(() => import("./Postlogin/Dashboard"));

const Views = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route
            exact
            path={"login"}
            element={<Login />}
          />

                    {/* <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signin`}
            element={<Signin />}
          /> */}
                    {/* <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signup`}
            element={<Signup />}
          /> */}

                    {/* <Route
            exact
            path={`${PREFIX_AUTH_PATH}/forgot-password`}
            element={<ForgotPassword />}
          /> */}
                    {/*     
  <Route
            exact
            path={`${PREFIX_APP_PATH}/app/home`}
            element={<Home />}
          />
*/}


                    {/* temrorrrry routes */}
                    <Route
                        exact
                        path={"home"}
                        element={<Home />}
                    />

                    <Route
                        exact
                        path={"about-us"}
                        element={<AboutUs />}
                    />

<Route
                        exact
                        path={"process"}
                        element={<Process/>}
                    />
                    
<Route
                        exact
                        path={"contact-us"}
                        element={<ContactUs/>}
                    />

<Route
                        exact
                        path={"saas-architecture"}
                        element={<SaasArchitecture/>}
                    />

<Route
                        exact
                        path={"architecture"}
                        element={<Architecture/>}
                    />

                    <Route exact path="/" element={<Home to="home" />} />

                    {/* <Route path="*" element={<PathNotFOund />} /> */}
                </Routes>
            </Suspense>
        </>
    );
};

export default Views;