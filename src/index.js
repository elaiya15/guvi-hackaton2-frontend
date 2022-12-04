/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter,Routes,Route,Link  } from "react-router-dom";
// import { Land } from "../src/login/Land";
import Land from './login/Land';


const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(

	<React.StrictMode>
		
		<BrowserRouter>
		 <Land/>
		</BrowserRouter>

	</React.StrictMode>
);
