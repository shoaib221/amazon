

import React from 'react';
import ReactDOM from 'react-dom/client';
import {GoogleOAuthProvider} from '@react-oauth/google';



import './styles/index.css';
import reportWebVitals from './reportWebVitals.js';
import { AuthContextProvider } from './context/authContext.js';
import { WorkoutContextProvider } from './context/WorkoutContext.js';
import { ProductProvider } from './context/productContext.js';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PageNotFound } from './page/PageNotFound';
import { Amazon } from "./page/Amazon";


const App = () => {
	//console.log(user);

  	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/amazon' element={ <Amazon /> } ></Route>
					<Route path='*' element={ <PageNotFound/> } ></Route>
				</Routes>
			</BrowserRouter>
		</>
  	);

}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  	
    	<AuthContextProvider>
			<ProductProvider>
			<GoogleOAuthProvider clientId='538256178695-tshpqhedtonoe5psm1uf0c94heg065uh.apps.googleusercontent.com' >
        	<WorkoutContextProvider>
        		<App />
        	</WorkoutContextProvider>
			</GoogleOAuthProvider>
			</ProductProvider>
    	</AuthContextProvider>
  	
);

reportWebVitals();
