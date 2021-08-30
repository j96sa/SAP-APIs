import { Fetch_Request } from "../helpers/Fetch_Request.js";
//import api from "../helpers/API_movies.js";
import api from "../helpers/API_tmdb.js";
import { CardFilm, CardFilmInfo, CardSeriesSearch } from "./CardFilm.js";
import {LoaderElement} from "./Loader.js";
import { F_ComInput } from "./F_ComInput.js";
import { Infinite_Scroll } from "./Infinite_Scroll.js";
const d = document;
const {Film,Series,Actor,PopularFilms,ImgSrc,Name,Pages} = api;

//**********OLD API
/*export async function F_Section_Film(){
    d.getElementById("main").innerHTML = F_ComInput();
    d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());
    
    await Fetch_Request({
        url:`${api.MediaPopular}`,
        res:(res)=>{                           
            let html = "";
            res.items.forEach(e=>html += CardFilm(e));
            d.querySelector(".film-content").innerHTML += html;
        }
    });    
    
    d.querySelector(".film_card-content .loader-section").style.display = "none";
    
    d.querySelectorAll(".film-content figure").forEach(e=>{
        e.style.background = `#${Math.round(Math.random()*999)}`;
    });    
};*/

export async function F_Section_Film(){
    d.getElementById("main").innerHTML = F_ComInput();
    d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());
    
    const url = `${PopularFilms+Pages}`;
    await Fetch_Request({
        url:url,
        res:(res)=>{                                                   
            let html = "";
            res.results.forEach(e=>html += CardFilm(e));
            d.querySelector(".film-content").innerHTML += html;
        }
    });        
    d.querySelector(".film_card-content .loader-section").remove();
    d.querySelectorAll(".film-content figure").forEach(e=>{
        e.style.background = `#${Math.round(Math.random()*999)}`;
    });
        
    d.addEventListener("scroll",e=>{
        if(d.querySelector(".film_card-content h2.subtitle").innerText === "Popular Films"){
            Infinite_Scroll(url);            
        };
    })
};

export async function F_FilmSearch(){
    const $input = d.querySelector(".input-section input"),
    $submitButton = d.querySelector(".input-section button img");

    d.addEventListener("click",e=>{
        if (e.target === $submitButton){            
            searchRequest($input.value);
        }        
    })

    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){            
            searchRequest($input.value);
        }
    })

    async function searchRequest(value){  
        d.querySelector(".film-content").innerHTML = "";
        d.querySelector(".film_card-content h2.subtitle").textContent = "Results";
        d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());
        
        //*********OLD API
        /*await Fetch_Request({
            url:`${api.SearchMedia}/${value}`,
            res:(res)=>{      
                if (res.results.length === 0){                    
                    let h3 = d.createElement("h3");
                    h3.classList = "error-verification";
                    h3.innerHTML = `Lo sentimos; No se encontraron coincidencias con: <span>"${res.expression}"</span>.`;
                    d.querySelector(".film_card-content").insertAdjacentElement("beforeend",h3);
                    setTimeout(() => {
                        d.querySelector(".film_card-content > h3").remove();
                    }, 3000);
                }else{
                    let html = "";                
                    res.results.forEach(e=>html += CardFilmSearch(e));    
                    d.querySelector(".film-content").innerHTML += html;
                };                                
            }
        });*/ 
        const url = `${Film+Name}${value}`;
        await Fetch_Request({
            url:url,
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
                    res.results.forEach(e=>html += CardFilm(e));    
                    d.querySelector(".film-content").innerHTML += html;
                    console.log(res);
                };                                
            }
        });

        const url2 = `${Series+Name}${value}`
        await Fetch_Request({
            url:url2,
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
                    res.results.forEach(e=>html += CardSeriesSearch(e));    
                    d.querySelector(".film-content").innerHTML += html;
                    //console.log(res);
                };                                
            }
        });

        d.querySelector(".film_card-content .loader-section").remove();
        d.querySelectorAll(".film-content figure").forEach(e=>{
            e.style.background = `#${Math.round(Math.random()*999)}`;
        });

        d.addEventListener("scroll",e=>{
            if(d.querySelector(".film_card-content h2.subtitle").innerText === "Results"){
                Infinite_Scroll(url);
                //Infinite_Scroll(url2);
            };
        });
    };
};

export async function F_Film_Info(){

    d.addEventListener("click",async e=>{
        if(e.target.matches(".film-card img")){
            //console.log(e.target.dataset.id);
            d.querySelector(".film_card-content .loader-section").style.display = "block";

            await Fetch_Request({
                url:`${api.MediaInfo}${e.target.dataset.id}`,
                res:(res)=>{
                    console.log(res);
                    d.querySelector(".film_card-content .film-content").classList = "film-info";
                    d.querySelector(".film_card-content h2.subtitle").innerHTML = `${res.title}`;
                    d.querySelector(".film_card-content .film-info").innerHTML = CardFilmInfo(res);
                }
            });

            d.querySelector(".film_card-content .loader-section").style.display = "none";
        };
    });

};

