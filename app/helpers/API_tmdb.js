import code from "../assets/debug.js";

const {xlor12,pack} = code,
Film = `https://api.themoviedb.org/3/search/movie?api_key=${xlor12}`,
Series = `https://api.themoviedb.org/3/search/tv?api_key=${xlor12}`,
Actor =`https://api.themoviedb.org/3/search/person?api_key=${xlor12}`,
//InfoId =`https://api.themoviedb.org/3/${type}/${ID}?api_key=${xlor12}`,
PopularFilms = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${xlor12}`,
ImgSrc = `https://image.tmdb.org/t/p/w500`,
Name = `&query=`,
Pages = `&page=`;

export default {
    Film,Series,Actor,PopularFilms,ImgSrc,Name,Pages    
};