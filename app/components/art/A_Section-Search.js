import { Fetch_Request } from "../../helpers/Fetch_Request.js";
import api from "../../helpers/API_art.js";
import { insertData } from "./Com_Art.js";

const d = document;

export function A_Section_Search(){
    d.querySelector(".switch-container").classList.replace("switched-artist","switched-art");            
    d.querySelector(".switch-container button").innerText = "Find an artist";
    d.querySelector(".input-section button").innerHTML = `<a href="#/art-results"><img src="./app/assets/search-button.png"></a>`;    
    const $buttonSearch = d.querySelector(".input-section button img"),
    $input = d.querySelector(".input-section input");
    
    let obsID,
    idIterator = 0;

    d.addEventListener("click",e=>{                
        if(e.target === $buttonSearch && d.querySelector(".film-input .switch-container").classList.contains("switched-art") && $input.value !== ""){
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
        d.querySelector(".film_card-content h2.subtitle").innerText = `Search result for: "${$input.value}"`
        
        Fetch_Request({
            url:`${api.Search}${$input.value}`,
            res:(res)=>{
                //console.log(res);                
                obsID = res.objectIDs;                                

                if (res.total === 0){
                    d.querySelector(".art-content").innerHTML = ``;                    
                    d.querySelector(".film_card-content > h2.subtitle").innerHTML = `<p class="art_error-message">No results found for <span>${$input.value}</span>`;
                    setTimeout(() => d.querySelector(".film_card-content > h2.subtitle").innerHTML="", 3500);
                    d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
                }else{                                                             
                    insertData(obsID,idIterator);                    
                };
            }
        });        
    };

    //INFINITE SCROLL
    d.addEventListener("scroll",e=>{          
        let {scrollHeight,scrollTop,clientHeight} = d.documentElement;
        if (location.hash === "#/art-results" && (!d.querySelector(".art-content").classList.contains("art-content_info")) && (scrollTop + clientHeight + 10) > scrollHeight){
            idIterator += 20;                        
            insertData(obsID,idIterator);            
        };
    });
};