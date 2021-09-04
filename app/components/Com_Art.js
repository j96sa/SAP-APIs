const d = document;
import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_art.js"
import {F_ComInput} from "./F_ComInput.js"
import { ArtDepartments } from "./CardArt.js";
import {Loader, LoaderElement} from "./Loader.js";
import { departmentData, departmentSection } from "./A_Section-Department.js";
import { artResults } from "./A_Section-Search.js";

window.addEventListener("hashchange",e=>{
    if (location.hash === "#/art") location.reload();
});

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
            d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
        }
    });

    departmentSection();
    departmentData();
    artResults();    
};

    
//funcion para insertar los datos
export async function insertData(arr,idIterator){                
    const $fragment = d.createDocumentFragment();
    d.querySelector(".art-content").classList.add("art-results");               
    
    //console.log(arr);    
    
    for (let i=idIterator;i<idIterator+20 && i<arr.length;i++){
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
                    img.alt = obj.title;
                    p.innerText = obj.title;
                    sect.appendChild(img)
                    sect.appendChild(p)                        
                }
            });
        };                        
        $fragment.appendChild(sect);            
    };
    d.querySelector(".film_card-content .art-content").appendChild($fragment);        
    d.querySelector(".film_card-content > .loader-section").style.display = "none";        
};
      
    
    

    
    























    
