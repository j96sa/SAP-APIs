const d = document;
import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_art.js"
import {F_ComInput} from "./F_ComInput.js"
import { ArtDepartments } from "./CardArt.js";
import {S_CompInput} from "./S_ComInput.js";
import {Loader, LoaderElement} from "./Loader.js";

export function Com_Art(){
    d.getElementById("main").innerHTML = F_ComInput();
    d.querySelector(".input-section input").placeholder = "Search all museums...";
    d.getElementById("switch-button").innerHTML = "Find an artist";
    d.querySelector(".switch-container").classList.replace("switched-film","switched-art");
    d.querySelector(".film_card-content > h2").innerText = "Find a work of art in one of the following departments";
    d.querySelector(".film_card-content .film-content").classList = "art-content";

    let idIterator = 0,
    obsID;
        
    d.querySelector(".film_card-content > h2.subtitle").insertAdjacentElement("afterend",LoaderElement())
    Fetch_Request({
        url:api.Departments,
        res:(res)=>{            
            let html = "";
            res.departments.forEach(e=>html += ArtDepartments(e));
            d.querySelector(".art-content").innerHTML = html;             
            d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
        }
    });

    //evento para entrar a buscar por museo
    d.addEventListener("click",e=>{
        e.stopImmediatePropagation()
        if (e.target.matches(".art-content > a section[id]")){            
            d.getElementById("main").innerHTML = S_CompInput();
            d.querySelector(".film-content").classList = "art-content";
            d.querySelector(".film_card-content h2").dataset.museum = e.target.innerText;
            d.querySelector(".film_card-content h2").innerText = `Looking at ${e.target.innerText} department`;            
            d.querySelector(".input-section button img").classList = "art-museum";
            d.querySelector(".film_card-content > h2.subtitle").insertAdjacentElement("afterend",LoaderElement())
            d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
        };

        if (e.target === d.querySelector(".input-section button img.art-museum")){
            idIterator = 0;            
            getArtFromDept(); 
        };  
        
        /*if (location.hash.includes("#/department") && d.querySelector(".film_card-content > div").classList.contains("art-content")){
            LoadScroll();
            console.log("validation");
        }else{
            return false;
        }*/
    });

    d.addEventListener("keydown",e=>{                
        if (e.key === "Enter" && e.target === d.querySelector(".input-section input")){                                
            idIterator = 0;
            getArtFromDept();
        };
    });

    //funcion para obtener los datos de la busqueda
    async function getArtFromDept(){
        d.querySelector(".art-content").innerHTML = "";
        //d.querySelector(".film_card-content > h2.subtitle").insertAdjacentElement("afterend",LoaderElement())                                                   
        d.querySelector(".film_card-content > .loader-section").style.display = "block"; 
        const $input = d.querySelector(".input-section input"),
        $dataMuseum = d.querySelector(".film_card-content h2.subtitle").dataset.museum;        

        Fetch_Request({
            url:`${api.ObjDpt_Dpt}${$dataMuseum}${api.ObjDpt_Obj}${$input.value}`,
            res:(res)=>{
                //console.log(res);                
                obsID = res.objectIDs;
                //console.log(obsID);                                
                
                if (res.total === 0){
                    d.querySelector(".art-content").innerHTML = `<p class="art_error-message">No results found for ${$input.value} in ${$dataMuseum}</p>`;
                    setTimeout(() => d.querySelector(".art-content").innerHTML="", 3500);
                }else{                     
                    insertData(obsID);                                                                                                                                       
                };
            }
        });
    };  
    
    /*d.addEventListener("scroll",()=>{                 
        if (location.hash.includes("#/department")){                      
            let {scrollHeight,scrollTop,clientHeight} = d.documentElement;
            if(((scrollTop + clientHeight + 10) > scrollHeight) && d.querySelector(".film_card-content > div").classList.contains("art-content")){                                                     
                idIterator += 50;
                //insertData(obsID) 
                console.log("o");                                
            };
        };
    });*/
    
    /*const LoadScroll = ()=>{
        window.addEventListener("scroll",e=>{
            e.stopImmediatePropagation();
            if (location.hash.includes("#/department") && d.querySelector(".film_card-content > div").classList.contains("art-content")){                
                console.log("scroll");
            }else{
                return false;
            }
        });
    }*/
    
    //infinite scroll                    
    window.addEventListener("scroll",e=>{                 
        scrollDelegation()
    });

    const scrollDelegation = ()=>{
        let {scrollHeight,scrollTop,clientHeight} = d.documentElement;
        if (location.hash.includes("#/department") && ((scrollTop + clientHeight + 10) > scrollHeight) && d.querySelector(".film_card-content > div").classList.contains("art-content")){
            idIterator += 50;            
            //insertData(obsID) 
            console.log("inval");                                        
        }else{
            return false;
        }
    };

    //funcion para insertar los datos
    async function insertData(arr){
        const $fragment = d.createDocumentFragment();        

        for (let i=idIterator;i<idIterator+50;i++){
            let sect = d.createElement("section");
            sect.classList = "art-card";
            let img = d.createElement("img");
            let p = d.createElement("p");            
            
            if (i >= arr.length){
                false;
            }else{                
                Fetch_Request({
                    url:`${api.ObjInfo}${arr[i]}`,
                    res:(obj)=>{                            
                        //console.log(obj);
                        img.dataset.id = obj.objectID;
                        img.src = obj.primaryImageSmall ?obj.primaryImageSmall :"./app/assets/no-img.png";
                        p.innerText = obj.title;
                        sect.appendChild(img)
                        sect.appendChild(p)                        
                    }
                });
            };                        
            $fragment.appendChild(sect);            
        };
        d.querySelector(".film_card-content .art-content").appendChild($fragment);
        //d.querySelector(".film_card-content > .loader-section").remove();                
        d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
    };























    
};