import { F_ComInput } from "./F_ComInput.js";
import api from "../../helpers/API_tmdb.js";
import { Fetch_Request } from "../../helpers/Fetch_Request.js";
import { CardActor, CardActorInfo } from "./CardActor.js";
import { LoaderElement } from "../../assets/Loader.js";
import lowerCom from "../../assets/debug.js"

export async function F_Section_Actor(){
    const d = document;
    
    d.getElementById("main").innerHTML = F_ComInput();    
    d.querySelector(".switch-container").classList.remove("switched-film");
    d.querySelector(".switch-container").classList.add("switched-actor");
    d.querySelector(".input-section input").placeholder = "Actor name...";
    d.getElementById("switch-button").innerHTML = "Search movies & series";
    d.querySelector(".film_card-content h2.subtitle").innerText = "Results";
    d.querySelector(".film_card-content .film-content").classList = "actor-content";
    
    const $input = d.querySelector(".input-section input"),
    $submitButton = d.querySelector(".input-section button img");

    d.addEventListener("click",e=>{
        if (e.target === $submitButton){            
            searchRequest($input.value);
        } 
        
        if(e.target.matches(".actor-card img")){            
            getActorInfo(e.target)
        };
    })

    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){            
            searchRequest($input.value);
        }
    })
    
    async function searchRequest(value){  
        if (!value || value === ""){
            return false;
        }else{
            d.querySelector(".actor-content").classList.remove("actor-content_info");
            d.querySelector(".actor-content").innerHTML = ""; 
            d.querySelector(".actor-content").insertAdjacentElement("beforebegin",LoaderElement()); 

            await Fetch_Request({
                url:`${api.Actor}${api.Name}${value}`,            
                res:(res)=>{ 
                    if (res.results.length === 0){                    
                        let h3 = d.createElement("h3");
                        h3.classList = "error-verification";
                        h3.innerHTML = `Lo sentimos; No se encontraron coincidencias con: <span>"${value}"</span>.`;
                        d.querySelector(".film_card-content").insertAdjacentElement("beforeend",h3);
                        setTimeout(() => {
                            d.querySelector(".film_card-content > h3").remove();
                        }, 3000);
                    }else{                              
                        let html = "";                
                        res.results.forEach(e=>html += CardActor(e));
                        d.querySelector(".actor-content").innerHTML += html;                        
                    };                 
                }
            });

            d.querySelector(".film_card-content .loader-section").remove();

            d.querySelectorAll(".actor-content figure").forEach(e=>{
                e.style.background = `#${Math.round(Math.random()*999)}`;
            });
        };        
    }; 
    
    async function getActorInfo(e){
        d.querySelector(".actor-content").innerHTML = ""; 
        d.querySelector(".actor-content").classList.add("actor-content_info");
        d.querySelector(".actor-content").insertAdjacentElement("beforebegin",LoaderElement()); 
                
        Fetch_Request({
            url:`https://api.themoviedb.org/3/person/${e.dataset.id}?api_key=${lowerCom.xlor12}`,
            res:(res)=>{                                                
                let html = CardActorInfo(res);
                d.querySelector(".actor-content").innerHTML = html;
            }
        });

        d.querySelector(".film_card-content .loader-section").remove();
    }
};