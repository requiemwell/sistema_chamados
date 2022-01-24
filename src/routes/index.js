import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import RouterWrapper from "./Route";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/dashboard";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path="/dashboard"
                element={
                    <RouterWrapper>
                        <Dashboard />
                    </RouterWrapper>
                }
            />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element = {<h1>Page not found</h1>}/>
        </Routes>
    );
}
