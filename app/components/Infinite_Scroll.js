import { Fetch_Request } from "../helpers/Fetch_Request.js";
import { CardFilm } from "./CardFilm.js";
import { Loader, LoaderElement } from "./Loader.js";
const d = document;

let page = 1;
export function Infinite_Scroll(url){        
    let {scrollHeight,scrollTop,clientHeight} = d.documentElement;                  
    if ((scrollTop + clientHeight + 10) > scrollHeight){
        page++;                        
        d.querySelector(".film_card-content").insertAdjacentElement("beforeend",LoaderElement());        
        LoadMoreData(url);                            
    };        
    

    async function LoadMoreData(newUrl){
        d.querySelector("body").style.overflow = "hidden";
        console.log(page);
        await Fetch_Request({
            url:`${newUrl+page}`,
            res:(res)=>{
                console.log(res);
                let html = "";
                res.results.forEach(e=>html += CardFilm(e));
                d.querySelector(".film-content").innerHTML += html;
            }
        });
        d.querySelector(".film_card-content .loader-section").remove();
        d.querySelector("body").style.overflow = "visible";
            
        d.querySelectorAll(".film-content figure").forEach(e=>{
            e.style.background = `#${Math.round(Math.random()*999)}`;
        });        
    };
};