import React, { Suspense } from "react";
import { Routes, Route, } from "react-router-dom";
import Home from "./Postlogin/Home";
import AboutUs from "./Postlogin/AboutUs";
import Process from "./Postlogin/Process";
import AINativeProcess from "./Postlogin/AINativeProcess";
import ContactUs from "./Postlogin/ContactUs/page";
import Login from "./PreLogin/Login";
import SaasArchitecture from "./Postlogin/SaasArchitecture";
import Architecture from "./Postlogin/Architecture";
import PathNotFound from "./PathNotFound";
import Technology from "./Postlogin/Technology";
import CustomAIModels from "./Postlogin/Home/CustomAIModels"
import AIIntegrations from "./Postlogin/Home/AIIntegrations"
import AIPoweredAutomation from "./Postlogin/Home/AIPoweredAutomation"
import RealTimeInsights from "./Postlogin/Home/RealTimeInsights"
import  AINative from "./Postlogin/Technology/AINative"

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
                        path={"Technologies"}
                        element={<Technology />}
                    />  
                      <Route
                        exact
                        path={"Technologies/cloud-native"}
                        element={<Technology />}
                    /> 
                    <Route
                        exact
                        path={"technologies/ai-native"}
                        element={<AINative />}
                    />
                     <Route
                        exact
                        path={"process"}
                        element={<Process />}
                    />
                     <Route
                        exact
                        path={"process/cloud-native"}
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
                     <Route
                        exact
                        path={"process/AI-Native"}
                        element={<AINativeProcess />}
                    /> 
                    <Route
                        exact
                        path={"AI-powered-automation"}
                        element={<AIPoweredAutomation />}
                    />

                    <Route exact path="/" element={<Home to="home" />} />
                    <Route exact path="/custom-AI-models" element={<CustomAIModels to="customAIModels" />} />
                    <Route exact path="/AI-integrations" element={<AIIntegrations to="AIIntegrations" />} />
                    <Route exact path="/real-time-insights" element={<RealTimeInsights to="RealTimeInsights" />} />
                    <Route path="not-found" element={<PathNotFound />} />

                    {/* <Route path="*" element={<PathNotFound />} /> */}
                </Routes>
            </Suspense>
        </>
    );
};

export default Views;