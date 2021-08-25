export function CardFilm(e){
    return `
        <section class="film-card">
            <figure>
                <img src="${e.image}">
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
                <img data-id="${e.id}" src="${e.image}">
            </figure>
            <div class="card-text">
                <h3 class="subtitle">${e.title}</h3>
                <p><span>description: </span>${e.description}</p>
            </div>
        </section>
    `;
};