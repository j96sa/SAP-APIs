import {H_Section_Film, H_Section_Film_Com} from "./H_Section-Film.js";

export function Com_Home() {   
    document.getElementById("main").innerHTML = H_Section_Film_Com();
    H_Section_Film();
};
