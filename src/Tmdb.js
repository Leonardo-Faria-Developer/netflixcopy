const API_KEY = '8cb6ce7dcfe0288f6135633110d75059';
const API_BASE = 'https://api.themoviedb.org/3';

// -Originais Netflix
// -Recomendados
// -Top Rated(em alta)
// -Ação
// -Terror
// -Romance
// -Documentarios


 
const basicFetch = async (endpoint) => {

	const req = await fetch(API_BASE+endpoint+'');
	const json = await req.json();
	return json;

	// return (await fetch ("${API_BASE}${endpoint}")).json();

}

export default {


	getHomeList: async () => {

		return [

				{
					
					slug: "originals",
					title: "Originais do Netflix",
					itens: await basicFetch("/discover/tv?with_network=213&language=pt-BR&api_key="+API_KEY)
				
				},
				{

					slug: "trending",
					title: "Recomendados para Você",
					itens: await basicFetch("/trending/all/week?language=pt-BR&api_key="+API_KEY)

				},
				{

					slug: "toprated",
					title: "Em Alta",
					itens: await basicFetch("/movie/top_rated?language=pt-BR&api_key="+API_KEY)

				},
				{

					slug: "action",
					title: "Ação",
					itens: await basicFetch("/discover/movie?with_genres=28&language=pt-BR&api_key="+API_KEY)

				},
				{

					slug: "horror",
					title: "Terror",
					itens: await basicFetch("/discover/movie?with_genres=27&language=pt-BR&api_key="+API_KEY)


				},
				{

					slug: "romance",
					title: "Romance",
					itens: await basicFetch("/discover/movie?with_genres=10749&language=pt-BR&api_key="+API_KEY)


				},
				{

					slug: "documentary",
					title: "Documentarios",
					itens: await basicFetch("/discover/movie?with_genres=99&language=pt-BR&api_key="+API_KEY)


				},



		];


	},


	getMovieInfo: async(movieId, type) => {


			let info = {};

			if(movieId){

				switch(type){

					case "movie":
						info = await basicFetch("/movie/"+ movieId + "?language=pt-BR&api_key="+API_KEY);
					break;

					case "tv":
						info = await basicFetch("/tv/"+ movieId + "?language=pt-BR&api_key="+API_KEY);
					break;

					default:
						info = null;
					break;



				}

			}

			return info;

	}


}