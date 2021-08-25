export function S_CompInput(){
    return `
        <article id="film-input" class="film-input film-article">
            <div>
                <section class="input-section">
                    <input name="film-input" type="text" placeholder="Artist name...">
                    <button><img src="./app/assets/search-button.png"></button>
                </section>
                <section class="switch-container switched-film">                    
                </section>
            </div>
        </article>
        <article class="film_card-content">
            <h2 class="subtitle">Artist</h2>
            <div class="film-content"></div>
        </article>
    `;
};