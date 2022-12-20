import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Films from "./Views/Films";
import FilmsList from "./Views/Films/List";
import FilmDetail from "./Views/Films/Detail";

const App = () => {
	return (
		<div className='App'>
			{/*
				TODO : doit respecter l'arborescence suivante :
				/!\ Utilisation de react-router obligatoire (v6) /!\ 

				/home
				/films
				/films/list
				/films/{filmId}

			*/}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/films' element={<Films />}>
					<Route index element={<FilmsList />} />
					<Route path=':filmId' element={<FilmDetail />} />
				</Route>
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</div>
	);
};

export default App;
