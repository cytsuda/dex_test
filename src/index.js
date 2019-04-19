import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const Parse = require("parse");

Parse.initialize("OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga");
Parse.serverURL = "http://localhost:1337/parse";

ReactDOM.render(<App />, document.getElementById("main"));

serviceWorker.unregister();