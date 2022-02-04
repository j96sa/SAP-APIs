import { F_Section_Actor } from "./F_Section-Actor.js";
import { F_FilmSearch, F_Film_Info, F_Section_Film } from "./F_Section-Film.js";

export function Com_Film(){
    const d = document;    
            
    F_Section_Film();
    F_FilmSearch();
    F_Film_Info();           

    /* VALIDACION PARA CAMBIAR ENTRE LA BUSQUEDA EN LA API DE LOS ACTORES Y LA API DE LAS PELICULAS(y series) */
    d.addEventListener("click",e=>{        
        if(e.target === d.getElementById("switch-button") && d.querySelector(".switch-container").classList.contains("switched-film")){                        
            F_Section_Actor();                       
        }else if(e.target === d.getElementById("switch-button") && d.querySelector(".switch-container").classList.contains("switched-actor")){                                    
            F_Section_Film();
            F_FilmSearch();
        }
    });
};