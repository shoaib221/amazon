
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home } from './page/home';
import { Navbar, OptionBar } from './page/Navbar';
import { Auth, Profile } from './page/auth';
import { AuthContext } from './context/authContext';
import { useContext } from 'react';
import { GoogleAuth } from './page/GoogleAuth';
import { PageNotFound } from './page/PageNotFound';
import { Amazon } from "./page/Amazon";


function App() {
	const { user } = useContext( AuthContext );
	//console.log(user);

  	return (
		<div className="App">
			<BrowserRouter>
				{ user && <Navbar /> }
				
				<Routes>
					
					
					<Route exact path='/amazon' element={ <Amazon /> } ></Route>
					<Route path='*' element={ <PageNotFound/> } ></Route>
				</Routes>


				
				
			</BrowserRouter>
		</div>
  	);

}

export default App;
