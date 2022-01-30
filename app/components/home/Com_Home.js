import Observer from "../../helpers/Observer.js";
import { H_SectionActorsSingers, H_SectionActorsSingers_Com } from "../H_Section-Actors&Singers.js";
import { H_Section_Art, H_Section_Art_Com } from "../H_Section-Art.js";
import {H_Section_Film, H_Section_Film_Com} from "../H_Section-Film.js";

export async function Com_Home() {   
    const $main = document.getElementById("main");

    $main.innerHTML = H_Section_Film_Com();
    $main.innerHTML += H_SectionActorsSingers_Com();
    $main.innerHTML += H_Section_Art_Com();        
    H_Section_Film();    
    H_SectionActorsSingers();
    H_Section_Art();

    const $article = document.querySelectorAll(".home-article");
    Observer($article);
};
