import React from "react";
import ReactDOM from "react-dom/client";
import RootRoute from "./routes";
import "./style/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RootRoute />
    </React.StrictMode>,
);
