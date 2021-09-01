import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_tmdb.js";
import locked from "../assets/debug.js"
import { CardFilm, CardFilmInfo, CardSeriesInfo, CardSeriesSearch } from "./CardFilm.js";
import {LoaderElement} from "./Loader.js";
import { F_ComInput } from "./F_ComInput.js";
const d = document;
const {Film,Series,Actor,PopularFilms,ImgSrc,Name,Pages} = api;

export async function F_Section_Film(){
    d.getElementById("main").innerHTML = F_ComInput();
    d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());
    
    //CARGA DE LA SECCION DE PELICULAS POPULARES
    await Fetch_Request({
        url:`${PopularFilms+Pages}`,
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
             
    //INFINITE SCROLL
    let page = 1;
    d.addEventListener("scroll",()=>{ 
        if (location.hash === "#/films"){  

            //validaciones para resetear el valor de la variable page;
            d.addEventListener("click",e=>{                                                                                                                                                                     
                if (e.target === d.querySelector(".input-section button img") || (e.target === d.querySelector(".header_home a img")) || (e.target.matches(".header_links a")) || (e.target.matches(".film-card a img"))){
                    page = 1;                    
                };        
            });

            d.addEventListener("keydown",e=>{                
                if (e.key === "Enter" && e.target === d.querySelector(".input-section input")){                                
                    page = 1;
                };
            });

            let {scrollHeight,scrollTop,clientHeight} = d.documentElement;
            if(((scrollTop + clientHeight + 10) > scrollHeight) && d.querySelector(".film_card-content h2.subtitle").innerText === "Popular Films"){
                page++;
                d.querySelector(".film_card-content").insertAdjacentElement("beforeend",LoaderElement());        
                InfiniteScroll();
            

                async function InfiniteScroll(){
                    d.querySelector("body").style.overflow = "hidden";        
                    await Fetch_Request({
                        url:`${PopularFilms+Pages}${page}`,
                        res:(res)=>{                                                    
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
        };
    });     
};

export async function F_FilmSearch(){
    const $input = d.querySelector(".input-section input"),
    $submitButton = d.querySelector(".input-section button img");
    
    d.addEventListener("click",e=>{
        if (e.target === $submitButton){            
            searchRequest($input.value);
        };        
    });
    
    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){            
            searchRequest($input.value);
        };
    });
    
    //CARGA DE LA SECCION DE SERIES Y PELICULAS
    async function searchRequest(value){  
        if(!value || value === ""){           
           return false;
        }else{
            d.querySelector(".film-content").classList.remove("film-info");
            d.querySelector(".film-content").innerHTML = "";
            d.querySelector(".film_card-content h2.subtitle").textContent = "Results";
            d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());                 
            
            //PELICULAS
            await Fetch_Request({
                url:`${Film+Name}${value}`,
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
                    };                                
                }
            });

            //SERIES
            await Fetch_Request({
                url:`${Series+Name}${value}`,
                res:(res)=>{                
                    if (res.results.length === 0){                                                                      
                        return false;
                    }else{
                        let html = "";                
                        res.results.forEach(e=>html += CardSeriesSearch(e));    
                        d.querySelector(".film-content").innerHTML += html;                    
                    };                                
                }
            });

            d.querySelector(".film_card-content .loader-section").remove();
            d.querySelectorAll(".film-content figure").forEach(e=>{
                e.style.background = `#${Math.round(Math.random()*999)}`;
            });            
        };
    };
};

export async function F_Film_Info(){

    d.addEventListener("click",async e=>{        
        if(e.target.matches(".film-card img")){            
            //d.querySelector(".film-content").insertAdjacentElement("beforebegin",LoaderElement());        
        
            if (e.target.classList.contains("movie")){
                await Fetch_Request({
                    url:`https://api.themoviedb.org/3/${e.target.classList}/${e.target.dataset.id}?api_key=${locked.xlor12}`,
                    res:(res)=>{                        
                        d.querySelector(".film_card-content .film-content").classList.add("film-info");
                        d.querySelector(".film_card-content h2.subtitle").innerHTML = `${res.original_title}`;
                        d.querySelector(".film_card-content .film-info").innerHTML = CardFilmInfo(res);
                    }
                });
            }else if(e.target.classList.contains("tv")){
                await Fetch_Request({
                    url:`https://api.themoviedb.org/3/${e.target.classList}/${e.target.dataset.id}?api_key=${locked.xlor12}`,
                    res:(res)=>{                        
                        d.querySelector(".film_card-content .film-content").classList.add("film-info");
                        d.querySelector(".film_card-content h2.subtitle").innerHTML = `${res.original_name}`;
                        d.querySelector(".film_card-content .film-info").innerHTML = CardSeriesInfo(res);
                    }
                });
            }else{
                return false
            }
            
            //d.querySelector(".film_card-content .loader-section").remove();            
        };
    });

};

