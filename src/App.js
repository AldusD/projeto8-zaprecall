import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import InitialPage from "./components/InitialPage";
import Recall from "./components/Recall";

export default function App() {

    // State Variables
    const [page, setPage] = React.useState("initial"); 

    return (
        <div className="container">
            {(page === "initial") ? <InitialPage setPage={setPage} /> : <Recall />}
        </div>
    );
}