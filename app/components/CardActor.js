import api from "../helpers/API_tmdb.js" 

export function CardActor(e){
    const {known_for_department,profile_path,name,known_for,id} = e;
    return `
        <section class="actor-card">
            <figure>
            <a href="#/actor-info"><img class="${name}" data-id="${id}" src="${profile_path ?api.ImgSrc+profile_path :"./app/assets/no-img.png"}"></a>
            </figure>
            <div class="actor_card-text">
                <h3 class="subtitle">${name}</h3>
                <p>${known_for_department}</p>
            </div>
        </section>
    `;
};

export function CardActorInfo(e){
    const {biography,birthday,known_for_department,name,place_of_birth,profile_path} = e,
    date = new Date(birthday).toDateString();

    return `
        <article class="actor-info">
            <img src="${profile_path ?api.ImgSrc+profile_path :"./app/assets/no-img.png"}">
            <div>
                <p><span>Name: </span>${name}</p>
                <p><span>Pofession: </span>${known_for_department}</p>
                <p><span>Born Day: </span>${date}</p>
                <p><span>City: </span>${place_of_birth}</p>
                <p><span>Biography: </span>${biography}</p>
            </div>
        </article>  
    `;
};