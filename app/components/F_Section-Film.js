import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_movies.js";
import { CardFilm, CardFilmSearch } from "./CardFilm.js";
import {LoaderElement} from "./Loader.js";
import { F_ComInput } from "./F_ComInput.js";
const d = document;

export async function F_Section_Film(){
    d.getElementById("main").innerHTML = F_ComInput();
    d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());
    
    await Fetch_Request({
        url:`${api.MediaPopular}`,
        res:(res)=>{                        
            let html = "";

            res.items.forEach(e=>html += CardFilm(e));

            d.querySelector(".film-content").innerHTML += html;
        }
    });

    /*await Fetch_Request({
        url:`https://jsonplaceholder.typicode.com/photos`,
        res:(res)=>{            
            let arr = [],
            html = "";                                   
            
            for(let i = 100; i > 0; i--){                
                arr.push(res[i]);
            };

            arr.forEach(e=>{
                html += `
                <section class="film-card">
                    <figure>
                        <img src="${e.url}">
                    </figure>
                    <div class="card-text">
                        <h3 class="subtitle">${e.title}</h3>
                    </div>
                </section>
                `;
            });
            d.querySelector(".film-content").innerHTML += html;
        }
    });*/
    
    d.querySelector(".film_card-content .loader-section").style.display = "none";
    
    d.querySelectorAll(".film-content figure").forEach(e=>{
        e.style.background = `#${Math.round(Math.random()*999)}`;
    });    
};

export async function F_FilmSearch(){
    const $input = d.querySelector(".input-section input"),
    $submitButton = d.querySelector(".input-section button img");

    d.addEventListener("click",e=>{
        if (e.target === $submitButton){            
            searchRequest($input.value);
        }        
    })

    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){            
            searchRequest($input.value);
        }
    })

    async function searchRequest(value){  
        d.querySelector(".film-content").innerHTML = "";
        d.querySelector(".film_card-content h2.subtitle").textContent = "Results";
        d.querySelector(".film_card-content .loader-section").style.display = "block";
        
        await Fetch_Request({
            url:`${api.SearchMedia}/${value}`,
            res:(res)=>{            
                let html = "";                
                res.results.forEach(e=>html += CardFilmSearch(e));
    
                d.querySelector(".film-content").innerHTML += html;
            }
        });  
        
        d.querySelector(".film_card-content .loader-section").style.display = "none";

        d.querySelectorAll(".film-content figure").forEach(e=>{
            e.style.background = `#${Math.round(Math.random()*999)}`;
        });
    };
};