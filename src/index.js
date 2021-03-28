import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AppInfoProvider } from "./context/AppInfo";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibWtsaW1lazE5OTciLCJhIjoiY2szd3Z4ZW9rMTA5ajNkb3B4cXd6ZW9wNSJ9.060xIr41HznBuJS_UYt1IA';
ReactDOM.render(
  <AppInfoProvider>
    <App />
  </AppInfoProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
