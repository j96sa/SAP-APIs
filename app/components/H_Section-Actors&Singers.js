export function H_SectionActorsSingers_Com() {
    return `
        <article id="article-actors" class="article-actors home-article">
            <section><h2 class="subtitle">You can also search for information about your favorite <span>actors</span> and <span>singers,</span> their <span>biography, discography,</span> and <span>greatest hits</span>.</h2></section>
            <div class="artist-img home-img"></div>
        </article>  
    `;
};

export function H_SectionActorsSingers(){
    const d = document,
    $fragment = d.createDocumentFragment(),
    IMG = ["./app/assets/actor.jpg","./app/assets/actor1.jpg","./app/assets/actor2.jpg","./app/assets/actor3.jpg"];
    
    IMG.forEach(e=>{
      let img = d.createElement("img");
      img.src = e;
      img.alt = "img";        
      $fragment.appendChild(img);
    });

    const $section = d.createElement("section");
    $section.appendChild($fragment);
    d.querySelector(".article-actors .artist-img").appendChild($section);
};

