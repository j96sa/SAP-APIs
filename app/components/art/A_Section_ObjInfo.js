import { Fetch_Request } from "../../helpers/Fetch_Request.js";
import api from "../../helpers/API_art.js";

const d = document;

export function Obj_Info(){
    d.addEventListener("click",e=>{
        if (e.target.matches(".art-content .art-card img")){
        d.querySelector(".art-content").classList.add("art-content_info");
        d.querySelector(".art-content").innerHTML = "";
        d.querySelector(".film_card-content > .loader-section").style.display = "block";                        

            Fetch_Request({
                url:`${api.ObjInfo}${e.target.dataset.id}`,
                res:(res)=>{
                    //console.log(res);
                    
                    d.querySelector(".film_card-content > h2.subtitle").innerText = `${res.title}`;
                    d.querySelector(".art-content").innerHTML= `
                        <article class="art-info">
                            <img src="${res.primaryImage ?res.primaryImageSmall :res.primaryImage}">
                            <section>
                                <p><span>Accession Year: </span>${res.accessionYear}</p>
                                <p><span>Artist Details: </span>${res.artistDisplayName}, ${res.artistRole}, ${res.artistDisplayBio}-${res.artistEndDate}</p>
                                <p><span>Classification: </span>${res.classification}</p>
                                <p><span>Department: </span>${res.department}</p>
                                <p><span>Outstanding Work: </span>${res.isHighlight}</p>
                                <p><span>Museum: </span>${res.repository}</p>                            
                                <p><span>Credit: </span>${res.creditLine}</p>
                            </section>
                        </article>
                    `;
                                                                               
                    d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
                }
            });
        };
    });    
};