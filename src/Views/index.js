import React, { Suspense } from "react";
import { Routes, Route, } from "react-router-dom";
import Home from "./Postlogin/Home";
import AboutUs from "./Postlogin/AboutUs";
import Process from "./Postlogin/Process";
import ContactUs from "./Postlogin/ContactUs/page";
import Login from "./PreLogin/Login";
import SaasArchitecture from "./Postlogin/SaasArchitecture";
import Architecture from "./Postlogin/Architecture";
import PathNotFound from "./PathNotFound";



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
                    {/* temrorrrry routes */}

                    <Route
                        exact
                        path={"about-us"}
                        element={<AboutUs />}
                    />

                    <Route
                        exact
                        path={"process"}
                        element={<Process />}
                    />

                    <Route
                        exact
                        path={"contact-us"}
                        element={<ContactUs />}
                    />

                    <Route
                        exact
                        path={"saas-architecture"}
                        element={<SaasArchitecture />}
                    />

                    <Route
                        exact
                        path={"architecture"}
                        element={<Architecture />}
                    />

                    <Route exact path="/" element={<Home to="home" />} />
                    <Route path="not-found" element={<PathNotFound />} />

                    {/* <Route path="*" element={<PathNotFound />} /> */}
                </Routes>
            </Suspense>
        </>
    );
};

export default Views;