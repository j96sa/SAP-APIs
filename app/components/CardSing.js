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
        <div class="artist-album">
            <p><span>Album Name:</span> ${e.strAlbum}</p>
            <p><span>Year:</span> ${e.intYearReleased}</p>
            <p><span>Genre:</span> ${e.strGenre}</p>
            <img data-id="${e.idAlbum}" src="./app/assets/more.png">
        </div>
    `;
};

export function CardSongs(e){
    return `
        <section class="track">
            <p><span>name: </span>${e.strTrack}</p>
            <p><span>genre: </span>${e.strGenre}</p>
            <p><span>duration: </span>${Math.floor((e.intDuration/1000/60) << 0)}:${Math.floor(e.intDuration/1000%60)}</p>            
        </section>
    `;
};