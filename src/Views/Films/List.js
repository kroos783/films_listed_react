import React, { useState, useEffect } from 'react';
import getFilmsList from '../.././api/moviesdatabase';
import './List.css';
import { Link } from 'react-router-dom';

const FilmList = () => {
const [films, setFilms] = useState([]);

useEffect(() => {
	getFilmsList().then((data) => {
		setFilms(data.results);
	});
}, []);



	return (
		<div>
			<div>Select a film</div>


			<div>
				{films.map((film) => {

					return (
						<div className='CardList'>
							<Link to={`${film.id}`} state={{film: film}} className="TextColor" >
							<div key={film.id}>
								{film.title ? <div className='TextInsindeCard'>{film.title}</div> : <div>Loading ..</div>}
								{film.overview ? <div className='TextInsindeCard'>{film.overview}</div> : <div>Loading ..</div>}
							</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilmList;
