import {Fetch_Request} from "../../helpers/Fetch_Request.js";
import {Loader} from "../../assets/Loader.js";
import api from "../../helpers/API_tmdb.js";

/* COMPONENTE VISUAL */
export function H_Section_Film_Com() {
    return `
        <article id="article-film" class="article-film home-article">
            <div class="film-text">
                <section>
                    <h1>Welcome to Search and Find</h1>
                    <h2 class="subtitle">On this website you can find information among other things, about <span>movies</span> and <span>series</span></h2>
                </section>                
            </div>
            <div class="film-img home-img"></div>
        </article>        
    `;
};

/* ESTA FUNCION HACE UN PEDIDO A LA API E INSERTA EN EL COMPONENTE ANTERIOR LAS 4 IMAGENES DE MANERA DINAMICA */
export async function H_Section_Film() {
    const $fragment = document.createDocumentFragment();
    document.querySelector(".article-film").innerHTML += Loader();
    
    await Fetch_Request({
        url:`${api.PopularFilms}`,
        res:(json)=>{                        
            let arr = [];

            for(let i = 4; i > 0; i--){                
                arr.push(json.results[i]);
            };            
            
            arr.forEach(e=>{
                let img = document.createElement("img");
                img.src = api.ImgSrc+e.poster_path;
                img.alt = e.title;
                $fragment.appendChild(img);
            });

            let $section = document.createElement("section");
            $section.appendChild($fragment);
            document.querySelector(".film-img").appendChild($section);
        }  
    });

    document.querySelector(".loader-section").style.display = "none";              
};


