import Observer from "../../helpers/Observer.js";
import { H_SectionActorsSingers_Com } from "./H_Section-Actors&Singers.js";
import { H_Section_Art_Com } from "./H_Section-Art.js";
import {H_Section_Film, H_Section_Film_Com} from "./H_Section-Film.js";

export async function Com_Home() {   
    const $main = document.getElementById("main");

    $main.innerHTML = H_Section_Film_Com();
    $main.innerHTML += H_SectionActorsSingers_Com();
    $main.innerHTML += H_Section_Art_Com();        
    H_Section_Film();        

    /* OBSERVER PARA CONTROLAR LA ANIMACION DEL HOME */
    const $article = document.querySelectorAll(".home-article");
    Observer($article);
};
