import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_art.js";
import { Com_Art, insertData } from "./Com_Art.js";

const d = document;

export function artResults(){
    d.querySelector(".input-section button").innerHTML = `<a href="#/art-results"><img src="./app/assets/search-button.png"></a>`;
    const $buttonSearch = d.querySelector(".input-section button img"),
    $inputValue = d.querySelector(".input-section input");
    
    let obsID,
    idIterator = 0;

    d.addEventListener("click",e=>{ 
        if(e.target === $buttonSearch && d.querySelector(".film-input .switch-container").classList.contains("switched-art") && $inputValue.value !== ""){
            e.stopImmediatePropagation();
            idIterator = 0;
            getDataIds(); 
        };       
    }); 
    d.addEventListener("keydown",e=>{
        if(e.key === "Enter" && e.target === d.querySelector(".input-section input") && d.querySelector(".film-input .switch-container").classList.contains("switched-art")){
            location.hash = "#/art-results";
            e.stopImmediatePropagation();
            idIterator = 0;
            getDataIds(); 
        };
    });

    async function getDataIds(){ 
        d.querySelector(".film_card-content > .loader-section").style.display = "block";                   
        d.querySelector(".art-content").innerHTML = "";
        d.querySelector(".film_card-content h2.subtitle").innerText = `Search result for: "${$inputValue.value}"`
        
        Fetch_Request({
            url:`${api.Search}${$inputValue.value}`,
            res:(res)=>{
                //console.log(res);                
                obsID = res.objectIDs;                                

                if (res.total === 0){
                    d.querySelector(".art-content").innerHTML = `<p class="art_error-message">No results found for ${$inputValue.value} in ${$deprtName}</p>`;
                    setTimeout(() => d.querySelector(".art-content").innerHTML="", 3500);
                    d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
                }else{                                                             
                    insertData(obsID,idIterator);                    
                };
            }
        });        
    };

    //INFINITE SCROLL
    d.addEventListener("scroll",e=>{ 
        e.stopImmediatePropagation();       
        let {scrollHeight,scrollTop,clientHeight} = d.documentElement;
        if (location.hash === "#/art-results" && (scrollTop + clientHeight + 10) > scrollHeight){
            idIterator += 20;                        
            insertData(obsID,idIterator);            
        };
    });
};