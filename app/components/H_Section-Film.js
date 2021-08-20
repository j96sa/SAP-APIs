import {Fetch_Request} from "../helpers/Fetch_Request.js";
import media from "../helpers/API_movies.js" ;

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

export function H_Section_Film() {
    const $fragment = document.createDocumentFragment();

    Fetch_Request({
        url:`https://jsonplaceholder.typicode.com/photos`,
        res:(json)=>{            
            let arr = [];

            for(let i = 4; i > 0; i--){                
                arr.push(json[i]);
            };
                        
            arr.forEach(e=>{
                let img = document.createElement("img");
                img.src = e.url;
                img.alt = e.title;
                $fragment.appendChild(img);
            });

            let $section = document.createElement("section");
            $section.appendChild($fragment);
            document.querySelector(".film-img").appendChild($section);
        }        
    });
};
///OKKKKKKKK  OKKOKKK
/*export function H_Section_Film() {
    const $fragment = document.createDocumentFragment();

    Fetch_Request({
        url:`${media.MediaPopular}`,
        res:(json)=>{
            console.log(json);            
            let arr = [];

            for(let i = 4; i > 0; i--){                
                arr.push(json.items[i]);
            };            
            
            arr.forEach(e=>{
                let img = document.createElement("img");
                img.src = e.image;
                img.alt = e.fullTitle;
                $fragment.appendChild(img);
            });

            let $section = document.createElement("section");
            $section.appendChild($fragment);
            document.querySelector(".film-img").appendChild($section);
        }                
    });
};*/


