export function CardActor(e){
    return `
        <section class="actor-card">
            <figure>
                <img src="${e.image}">
            </figure>
            <div class="actor_card-text">
                <h3 class="subtitle">${e.title}</h3>
                <p>${e.description}</p>
            </div>
        </section>
    `;
};