import { F_ComInput } from "./F_ComInput.js";

export function Com_Film(){
    document.getElementById("main").innerHTML = F_ComInput();

    

    
    const d = document,
    $switchButton = d.getElementById("switch-button"),
    $switchContainer = d.querySelector(".switch-container"),
    $input = d.querySelector(".input-section input");

    document.addEventListener("click",e=>{
        
        if(e.target === $switchButton && $switchContainer.classList.contains("switched-film")){            
            console.log($switchContainer);
            $switchContainer.classList.remove("switched-film");
            $switchContainer.classList.add("switched-actor");
            $input.placeholder = "Actor name...";
            $switchButton.innerHTML = "Search movies & series";
        }else if(e.target === $switchButton && $switchContainer.classList.contains("switched-actor")){
            console.log($switchContainer);
            $switchContainer.classList.remove("switched-actor");
            $switchContainer.classList.add("switched-film");
            $input.placeholder = "Movie, serie name...";
            $switchButton.innerHTML = "Search actor";
        }
    });
};