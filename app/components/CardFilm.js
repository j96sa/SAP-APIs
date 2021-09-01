import api from "../helpers/API_tmdb.js";
const {ImgSrc} = api;
export function CardFilm(e){
    const {id,title,poster_path,release_date,vote_average} = e,
    date = new Date(release_date).toDateString();        

    return `
        <section class="film-card">
            <figure>
                <a href="#/film-info"><img class="movie" data-id="${id}" src="${poster_path ?ImgSrc+poster_path :`./app/assets/no-img.png`}"></a>
            </figure>
            <div class="card-text">
                <h3 class="subtitle">${title}</h3>                
                <div>
                    <p>date: <span>${date.slice(0,10)+", "+date.slice(11,16)}</span></p>
                    <p>votes: <span>${vote_average}</span> / 10</p>
                </div>
            </div>
        </section>  
    `;
};

export function CardSeriesSearch(e){
    const {id,name,poster_path,first_air_date,vote_average} = e,
    date = new Date(first_air_date).toDateString();

    return `
    <section class="film-card">
    <figure>
        <a href="#/film-info"><img class="tv" data-id="${id}" src="${poster_path ?ImgSrc+poster_path :`./app/assets/no-img.png`}"></a>
    </figure>
    <div class="card-text">
        <h3 class="subtitle">${name}</h3>                
        <div>
            <p>first air date: <span>${date.slice(0,10)+", "+date.slice(11,16)}</span></p>
            <p>votes: <span>${vote_average}</span> / 10</p>
        </div>
    </div>
</section>
    `;
};

export function CardFilmInfo(e){
    const {homepage,status,overview,runtime,release_date,spoken_languages,backdrop_path,poster_path,genres,tagline,vote_average,production_countries,production_companies} = e,
    date = new Date(release_date).toDateString();

    let companies = "";
    production_companies.forEach(e=>companies += `
        <div>
            <img src="${e.logo_path ?ImgSrc+e.logo_path :`./app/assets/no-img.png`}"><br>            
            <p>${e.name}</p>
        </div>
    `);

    let listGenres = "";
    genres.forEach(e=>listGenres +=`${e.name}, `);

    let countries = "";
    production_countries.forEach(e=>countries +=`${e.name}, `);

    let languages = "";
    spoken_languages.forEach(e=>languages += `${e.english_name}, `);    
    
    return `
        <section class="info-container">
            <div class="film-info_media">
                <img src="${poster_path ?ImgSrc+poster_path :`./app/assets/no-img.png`}">
                <p><span>${tagline}</span></p>
                <img src="${backdrop_path ?ImgSrc+backdrop_path :`./app/assets/no-img.png`}">
            </div>            
            <div class="film-info_content">                
                <section>                    
                    ${companies}
                </section>                
                <p><span>Duration: </span>${Math.floor(runtime/60)} h  :  ${runtime%60} min</p>
                <p><span>Languages: </span>${languages.substring(0,languages.length-2)}</p>
                <p><span>Genres: </span>${listGenres.substring(0,listGenres.length-2)}</p>
                <p><span>Countries: </span>${countries.substring(0,countries.length-2)}</p>                
                <p><span>Vote Average: </span>${vote_average}</p>                
                <p><span>Release Date: </span>${date.slice(0,10)+", "+date.slice(11,16)}</p>
                <p><span>Status: </span>${status}</p>
                <p><span>Plot: </span>${overview}</p>
                <p><span>Oficial Site</span><br></r> <a href="${homepage}" target="_blank" rel="noopener">${homepage}</a></p>
            </div>   
        </section>
    `;
};

export function CardSeriesInfo(e){
    const {overview,episode_run_time,number_of_episodes,status,tagline,vote_average,spoken_languages,number_of_seasons,poster_path,backdrop_path,first_air_date,genres,homepage,in_production,production_companies,production_countries} = e,
    date = new Date(first_air_date).toDateString();

    let companies = "";
    production_companies.forEach(e=>companies += `
        <div>
            <img src="${e.logo_path ?ImgSrc+e.logo_path :`./app/assets/no-img.png`}"><br>            
            <p>${e.name}</p>
        </div>
    `);

    let listGenres = "";
    genres.forEach(e=>listGenres +=`${e.name}, `);

    let countries = "";
    production_countries.forEach(e=>countries +=`${e.name}, `);

    let languages = "";
    spoken_languages.forEach(e=>languages += `${e.english_name}, `);
    

    return `
        <section class="info-container">
            <div class="film-info_media">
                <img src="${poster_path ?ImgSrc+poster_path :`./app/assets/no-img.png`}">                
                <p><span>${tagline}</span></p>
                <img src="${backdrop_path ?ImgSrc+backdrop_path :`./app/assets/no-img.png`}">
            </div>
            <div class="film-info_content">                
                <section>
                    ${companies}
                </section>                
                <p><span>Duration for episode: </span>${episode_run_time} min</p>
                <p><span>Languages: </span>${languages.substring(0,languages.length-2)}</p>
                <p><span>Genres: </span>${listGenres.substring(0,listGenres.length-2)}</p>
                <p><span>Countries: </span>${countries.substring(0,countries.length-2)}</p>                
                <p><span>Vote Average: </span>${vote_average}</p>                
                <p><span>First Air-Day: </span>${date.slice(0,10)+", "+date.slice(11,16)}</p>
                <p><span>Status: </span>${status}</p>
                <p><span>Plot: </span>${overview}</p>
                <p><span>On-Air: </span>${in_production}</p>
                <p><span>Seasons: </span>${number_of_seasons}</p>
                <p><span>Episodes: </span>${number_of_episodes}</p>
                <p><span>Oficial Site</span><br></r> <a href="${homepage}" target="_blank" rel="noopener">${homepage}</a></p>
            </div>   
        </section>
    `;
};

export function CardPersonInfo(e){
    return `
        <section class="info-container">
            <img src="${e.image}">
            <div class="film-info_content">
                <p><span>Directors: </span>${e.directors}</p>
                <p><span>Writers: </span>${e.writers}</p>
                <p><span>Type: </span>${e.type}</p>
                <p><span>Cast: </span>${e.stars}</p>
                <p><span>Duration: </span>${e.runtimeStr}</p>
                <p><span>Languages: </span>${e.languages}</p>
                <p><span>Genres: </span>${e.genres}</p>
                <p><span>Countries: </span>${e.countries}</p>
                <p><span>Companies: </span>${e.companies}</p>
                <p><span>Metacritic Rating: </span>${e.metacriticRating}</p>
                <p><span>ImDb Rating: </span>${e.imDbRating}</p>
                <p><span>Release Date: </span>${e.year}</p>
                <p><span>Awards: </span>${e.awards}</p>
                <p><span>Plot: </span>${e.plot}</p>
            </div>   
        </section>
    `;
};