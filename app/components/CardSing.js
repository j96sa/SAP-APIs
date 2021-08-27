export function CardSing(e){
    return `
        <article class="artist-article">
            <div class="artist-header">                
                <section class="artist-img">
                    <img src="${e.strArtistBanner === null || e.strArtistBanner === "" ?e.strArtistFanart :e.strArtistBanner}">
                    <h3 class="subtitle">${e.strArtist}</h3>                      
                </section>
                <section class="artist-info">
                    <p><span>Born:</span> ${e.intBornYear} - ${(e.intDiedYear === null ?"present" :e.intDiedYear)}</p>
                    <p><span>Country:</span> ${e.strCountry}</p>
                    <p><span>Gender:</span> ${e.strGender}</p>
                    <p><span>Music genere:</span> ${e.strGenre}</p>
                </section>
            </div>
            <section class="artist-bio">
                <p>${e.strBiographyEN}</p>
            </section>
        </article>
    `;
};

export function CardDisc(e){
    return `
        <div class="artist-album" data-id="${e.idAlbum}">
            <p><span>name:</span> ${e.strAlbum}</p>
            <p><span>year:</span> ${e.intYearReleased}</p>
            <p><span>genere:</span> ${e.strGenre}</p>
        </div>
    `;
};