const d = document;
import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_art.js";
import { departmentData, departmentSection } from "./A_Section-Department.js";
import { A_Section_Search } from "./A_Section-Search.js";
import { A_Section_Artist } from "./A_Section_Artist.js";
import { Comp_Art_Home } from "./A_ComArtHome.js";

window.addEventListener("hashchange",e=>{
    if (location.hash === "#/art") location.reload();
});

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

export function Com_Art(){
    Comp_Art_Home();
    departmentSection();
    departmentData();
    A_Section_Search();
    
    
    d.addEventListener("click",e=>{
        if (e.target === d.getElementById("switch-button") && d.querySelector(".switch-container").classList.contains("switched-art")){
            //e.stopImmediatePropagation();
            A_Section_Artist();
        }else if(e.target === d.getElementById("switch-button") && d.querySelector(".switch-container").classList.contains("switched-artist")){
            Comp_Art_Home();            
            A_Section_Search();
        };
    });
};

    

      
    
    

    
    























    
