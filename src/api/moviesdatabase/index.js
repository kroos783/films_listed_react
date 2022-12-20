import axios from "axios";
const URL = "https://api.themoviedb.org/3/";
const BEARER_TOKEN =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTRiMzI2YTU2NWE4ZDAyNzc3MGM3NTliMTBjODgzZSIsInN1YiI6IjYyMWYyODY0MDU4MjI0MDA0Mjk0ZTk5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hU9A4u6Hf68R2s-3-1uE6Vj902Urhm5MxYC6NJg5PY0";

//
// TIP : Utiliser une instance avec axios en respectant les usecases (implementer une instance)
//

const getFilmsList = async () => {
	let url = `movie/top_rated`;
	//
	// TODO : implementer getFilmsList
	//
	let response

	try {
		response = await axios.get(`${URL}${url}`, {
			headers: {
				Authorization: `Bearer ${BEARER_TOKEN}`,
			},
		});

	}
	catch (e) {
		throw new Error(e.message)
	}



	return response?.data ? response?.data : null
};

export default getFilmsList;