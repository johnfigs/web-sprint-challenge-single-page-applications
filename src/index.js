import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// importing BrowserRouter as Router

import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    //wrapping App in Router
    <Router>
        <App />
    </Router>
    , document.getElementById("root")
 );
