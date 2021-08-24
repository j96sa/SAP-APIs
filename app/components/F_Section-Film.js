import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_movies.js";
import { CardFilm, CardFilmSearch } from "./CardFilm.js";
import {LoaderElement} from "./Loader.js";
const d = document;

export async function F_Section_Film(){
    d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());

    setTimeout(() => {
        Fetch_Request({
            url:api.MediaPopular,
            res:(res)=>{            
                let html = "";
    
                res.items.forEach(e=>html += CardFilm(e));
    
                d.querySelector(".film-content").innerHTML += html;
            }
        });
    }, 500000000000);

    //d.querySelector(".film-content .loader-section").style.display = "none";
    
    d.querySelectorAll(".film-content figure").forEach(e=>{
        e.style.background = `#${Math.floor(Math.random()*1000)}`;
    });
};

export async function F_FilmSearch(){
    const $input = d.querySelector(".input-section input"),
    $submitButton = d.querySelector(".input-section button img");

    d.addEventListener("click",e=>{
        if (e.target === $submitButton){
            console.log($input.value);
            searchRequest($input.value);
        }        
    })

    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){
            console.log($input.value);
            searchRequest($input.value);
        }
    })

    async function searchRequest(value){  
        d.querySelector(".film-content").innerHTML = "";
        
        await Fetch_Request({
            url:`${api.SearchMedia}/${value}`,
            res:(res)=>{            
                let html = "";
                console.log(res);
                res.results.forEach(e=>html += CardFilmSearch(e));
    
                d.querySelector(".film-content").innerHTML += html;
            }
        });

        d.querySelectorAll(".film-content figure").forEach(e=>{
            e.style.background = `#${Math.floor(Math.random()*1000)}`;
        });
    };
};