import api from "../helpers/API_tmdb.js";
const {ImgSrc} = api;
export function CardFilm(e){
    const {id,title,poster_path,release_date,vote_average} = e,
    date = new Date(release_date).toDateString();        

    return `
        <section class="film-card">
            <figure>
                <a href="#/film-info"><img data-id="${id}" src="${poster_path ?ImgSrc+poster_path :`./app/assets/no-img.png`}"></a>
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
        <a href="#/film-info"><img data-id="${id}" src="${poster_path ?ImgSrc+poster_path :`./app/assets/no-img.png`}"></a>
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
                <p><span>Year: </span>${e.year}</p>
                <p><span>Awards: </span>${e.awards}</p>
                <p><span>Plot: </span>${e.plot}</p>
            </div>   
        </section>
    `;
};