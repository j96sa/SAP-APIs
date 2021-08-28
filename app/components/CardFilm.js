export function CardFilm(e){
    return `
        <section class="film-card">
            <figure>
                <a href="#/film-info"><img data-id="${e.id}" src="${e.image}"></a>
            </figure>
            <div class="card-text">
                <h3 class="subtitle">${e.title}</h3>
                <p><span>cast: </span>${e.crew}</p>
                <div>
                    <p>year: <span>${e.year}</span></p>
                    <p>Rat: <span>${e.imDbRating}</span></p>
                </div>
            </div>
        </section>  
    `;
};

export function CardFilmSearch(e){
    return `
        <section class="film-card">
            <figure>
                <a href="#/film-info"><img data-id="${e.id}" src="${e.image}"></a>
            </figure>
            <div class="card-text">
                <h3 class="subtitle">${e.title}</h3>
                <p><span>description: </span>${e.description}</p>
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