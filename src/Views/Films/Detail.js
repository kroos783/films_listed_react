import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css'

const FilmDetail = (props) => {
	const navigate = useNavigate();
	const location = useLocation();
	const film = location.state.film;

	console.log(film);

	return (
	<div className='detailBox'>
		<button className='buttonNav' onClick={() => navigate(-1)}>Go back to films</button>
		<div className='cardBox'>
			<div className='cardFilm'>
				<div>
					{film ? <img className='posterimg' src={'https://image.tmdb.org/t/p/original' + film.poster_path} alt={film.title} /> : <div>Loading ..</div>}
				</div>
				<div className='cardFilmText'>
					<div>
						{film ? <h1>{film.title}</h1> : <div>Loading ..</div>}
					</div>
					<div>
						{film ? film.overview : <div>Loading ..</div>}
					</div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default FilmDetail;
