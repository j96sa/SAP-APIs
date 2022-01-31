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
    arr = ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg","https://imagenes.elpais.com/resizer/J5UxnqYpkVyHSsLkPX2ZWIDoKsk=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GGQLFCFKS2WQLHYHJIRZQJH4FI.jpg","https://3.bp.blogspot.com/-n1aZFQN3_OU/WEcVxxHlgOI/AAAAAAAACF4/z_1qV-Qvq90IZpmf9iYiT_Z2bywX70DTACLcB/s1600/387970_3000.jpg","https://culturaimpaciente.com/wp-content/uploads/2019/12/C4V8YNGWIAEDEPU-1024x797.jpg"];

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