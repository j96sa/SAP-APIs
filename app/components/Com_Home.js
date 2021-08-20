import { H_SectionActorsSingers, H_SectionActorsSingers_Com } from "./H_Section-Actors&Singers.js";
import {H_Section_Film, H_Section_Film_Com} from "./H_Section-Film.js";

export function Com_Home() {   
    const $main = document.getElementById("main");

    $main.innerHTML = H_Section_Film_Com();
    $main.innerHTML += H_SectionActorsSingers_Com();
    H_Section_Film();
    H_SectionActorsSingers();
};
