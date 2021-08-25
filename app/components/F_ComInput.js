export function F_ComInput(){
    return `
        <article id="film-input" class="film-input film-article">
            <div>
                <section class="input-section">
                    <input name="film-input" type="text" placeholder="Movie, serie name...">
                    <button><img src="./app/assets/search-button.png"></button>
                </section>
                <section class="switch-container switched-film">
                    <button id="switch-button">Search actor</button>
                </section>
            </div>
        </article>
        <article class="film_card-content">
            <h2 class="subtitle">Pupular Films</h2>
            <div class="film-content"></div>
        </article>
    `;
}