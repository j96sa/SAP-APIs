export function H_Section_Art_Com(){
    return `
        <article id="article-art" class="article-art home-article">
            <section><h2 class="subtitle">And full access to <span>art museums</span> and their <span>works,</span> as well as detailed information about them and their <span>creators</span>.</h2></section>
            <div class="art-img home-img"></div>            
        </article>
        <section class="home-end-message"><h2 class="subtitle">Search and Find</h2></section>
    `;
};

export function H_Section_Art(){
    const d = document,
    $fragment = d.createDocumentFragment(),
    arr = ["./App/assets/art.jpg","./App/assets/art2.jpg","./App/assets/art3.jpg","./App/assets/art4.jpg"];

    arr.forEach(e=>{
        let img = d.createElement("img");
        img.src = e;
        img.alt = "img";
        $fragment.appendChild(img);
    });

    let $section = d.createElement("section");
    $section.appendChild($fragment);
    d.querySelector(".article-art .art-img").appendChild($section);
};