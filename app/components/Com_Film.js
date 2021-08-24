import { F_ComInput } from "./F_ComInput.js";
import { F_FilmSearch, F_Section_Film } from "./F_Section-Film.js";

export function Com_Film(){
    const d = document,
    $main = document.getElementById("main");


    $main.innerHTML = F_ComInput();
    F_Section_Film();
    F_FilmSearch();

    


    d.querySelectorAll(".film_card-content figure").forEach(e=>{
        e.style.background = `#${Math.floor(Math.random()*1000)}`;
    });


    const $switchButton = d.getElementById("switch-button"),
    $switchContainer = d.querySelector(".switch-container"),
    $input = d.querySelector(".input-section input");

    document.addEventListener("click",e=>{
        
        if(e.target === $switchButton && $switchContainer.classList.contains("switched-film")){                        
            $switchContainer.classList.remove("switched-film");
            $switchContainer.classList.add("switched-actor");
            $input.placeholder = "Actor name...";
            $switchButton.innerHTML = "Search movies & series";
        }else if(e.target === $switchButton && $switchContainer.classList.contains("switched-actor")){            
            $switchContainer.classList.remove("switched-actor");
            $switchContainer.classList.add("switched-film");
            $input.placeholder = "Movie, serie name...";
            $switchButton.innerHTML = "Search actor";
        }
    });
};