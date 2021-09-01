const d = document;
import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_art.js"
import {F_ComInput} from "./F_ComInput.js"
import { ArtCardGallery, ArtDepartments } from "./CardArt.js";
import {S_CompInput} from "./S_ComInput.js";
import {LoaderElement} from "./Loader.js";

export function Com_Art(){
    d.getElementById("main").innerHTML = F_ComInput();
    d.querySelector(".input-section input").placeholder = "Search all museums...";
    d.getElementById("switch-button").innerHTML = "Find an artist";
    d.querySelector(".switch-container").classList.replace("switched-film","switched-art");
    d.querySelector(".film_card-content > h2").innerText = "Find a work of art in one of the following departments";
    d.querySelector(".film_card-content .film-content").classList = "art-content";
        
    d.querySelector(".film_card-content > h2.subtitle").insertAdjacentElement("afterend",LoaderElement())
    Fetch_Request({
        url:api.Departments,
        res:(res)=>{            
            let html = "";
            res.departments.forEach(e=>html += ArtDepartments(e));
            d.querySelector(".art-content").innerHTML = html;
        }
    });
    d.querySelector(".film_card-content > .loader-section").remove(); 

    //evento para entrar a buscar por museo
    d.addEventListener("click",e=>{
        if (e.target.matches(".art-content > a section[id]")){            
            d.getElementById("main").innerHTML = S_CompInput();
            d.querySelector(".film-content").classList = "art-content";
            d.querySelector(".film_card-content h2").dataset.museum = e.target.innerText;
            d.querySelector(".film_card-content h2").innerText = `Looking at ${e.target.innerText} department`;            
            d.querySelector(".input-section button img").classList = "art-museum";
        };

        if (e.target === d.querySelector(".input-section button img.art-museum")){
            getArtFromDept(); 
        };       
    });

    d.addEventListener("keydown",e=>{                
        if (e.key === "Enter" && e.target === d.querySelector(".input-section input")){                                
            getArtFromDept();
        };
    });

    async function getArtFromDept(){
        const $input = d.querySelector(".input-section input"),
        $dataMuseum = d.querySelector(".film_card-content h2.subtitle").dataset.museum,        
        $fragment = d.createDocumentFragment();

        Fetch_Request({
            url:`${api.ObjDpt_Dpt}${$dataMuseum}${api.ObjDpt_Obj}${$input.value}`,
            res:(res)=>{
                //console.log(res);

                res.objectIDs.forEach(e=>{
                    Fetch_Request({
                        url:`${api.ObjInfo}${e}`,
                        res:(obj)=>{                            
                            console.log(obj);
                            let sect = d.createElement("section");
                            sect.classList = "art-card";
                            let img = d.createElement("img");
                            img.src = e.primaryImageSmall;
                            let p = d.createElement("p");
                            p.innerText = e.title;
                            sect.appendChild(p)
                            sect.appendChild(img)
                            $fragment.appendChild(sect);
                        }
                    });
                    d.querySelector(".film_card-content .art-content").appendChild($fragment);
                });                
            }
        });
    };


























    
};