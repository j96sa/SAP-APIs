const d = document;
import {S_CompInput} from "./S_ComInput.js";
import {Loader, LoaderElement} from "./Loader.js";
import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_art.js";
import { insertData } from "./Com_Art.js";


export function departmentSection(){
    //evento para entrar a buscar por departamento
    d.addEventListener("click",e=>{        
        if (e.target.matches(".art-content > a section[id]")){            
            d.getElementById("main").innerHTML = S_CompInput();
            d.querySelector(".film-input input").placeholder = "Name of the work...";
            d.querySelector(".film-content").classList = "art-content";
            d.querySelector(".film_card-content h2").dataset.museum = e.target.innerText;
            d.querySelector(".film_card-content h2").id = e.target.id;
            d.querySelector(".film_card-content h2").innerText = `Looking at ${e.target.innerText} department`;            
            d.querySelector(".input-section button img").classList = "art-museum";
            d.querySelector(".film_card-content > h2.subtitle").insertAdjacentElement("afterend",LoaderElement())
            d.querySelector(".film_card-content > .loader-section").style.display = "none";             
        };        
    });
};


export function departmentData(){
    let idIterator = 0,
    obsID;
    

    d.addEventListener("click",e=>{                
        if (e.target === d.querySelector(".input-section button img.art-museum")){
            e.stopImmediatePropagation();
            idIterator = 0;            
            getArtFromDept(); 
        };                
    });
    d.addEventListener("keydown",e=>{                
        if (e.key === "Enter" && e.target === d.querySelector(".input-section input") && d.querySelector(".input-section button img").classList.contains("art-museum")){                                
            e.stopImmediatePropagation();
            idIterator = 0;
            getArtFromDept();
        };
    });    

    //funcion para obtener los datos de la busqueda
    async function getArtFromDept(){                
        d.querySelector(".art-content").innerHTML = "";        
        d.querySelector(".film_card-content > .loader-section").style.display = "block"; 
        const $input = d.querySelector(".input-section input"),
        $dataDeprt = d.querySelector(".film_card-content h2.subtitle").id,
        $deprtName = d.querySelector(".film_card-content h2.subtitle").dataset.museum;
        
        Fetch_Request({
            url:`${api.ObjDpt_Dpt}${$dataDeprt}${api.ObjDpt_Obj}${$input.value}`,
            res:(res)=>{
                //console.log(res);                
                obsID = res.objectIDs;                                               
                
                if (res.total === 0){
                    d.querySelector(".art-content").innerHTML = `<p class="art_error-message">No results found for ${$input.value} in ${$deprtName}</p>`;
                    setTimeout(() => d.querySelector(".art-content").innerHTML="", 3500);
                    d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
                }else{                                         
                    insertData(obsID,idIterator);                                                                                                                                       
                    d.querySelector(".art-content").classList.add("dept-on");        
                };
            }
        });
    };        
    
    //INFINITE SCROLL
    d.addEventListener("scroll",e=>{        
        if (location.hash === "#/department"){
            let {scrollHeight,scrollTop,clientHeight} = d.documentElement;
            if ((scrollTop + clientHeight + 10) > scrollHeight && (!d.querySelector(".art-content").classList.contains("art-content_info")) && d.querySelector(".art-content").classList.contains("dept-on")){
                idIterator += 20;                                
                insertData(obsID,idIterator);
            };
        };
    });
};
