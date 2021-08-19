import {Fetch_Request} from "../helpers/Fetch_Request.js";
import media from "../helpers/API_movies.js" ;

export function H_Section_Film_Com() {
    return `
        <article id="article-film">
            <div class="film-text">
                <section>
                    <h1>Welcome To WEB NAME</h1>
                    <h2>Here lorem ipsum asfkdas ajsfka ahsjfk asjfd</h2>
                </section>                
            </div>
            <div class="film-img">
                
            </div>
        </article>        
    `;
};

export function H_Section_Film() {
    const $fragment = document.createDocumentFragment();

    Fetch_Request({
        url:`${media.MediaPopular}`,
        res:(json)=>{
            //console.log(json);            
            let arr = [];

            for(let i = 4; i > 0; i--){                
                arr.push(json.items[i]);
            };
            console.log(arr);
            
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

};

