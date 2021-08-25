import { Com_Film } from "./Com_Film.js";
import { Com_Home } from "./Com_Home.js";

export function  Router() {
    const d = document,
    {hash} = location;

    switch (hash) {
        case "":
            Com_Home();
        break;

        case "#/home":
            Com_Home();
        break;

        case "#/songs":
            d.getElementById("main").innerHTML = "songs";
        break;

        case "#/films":
            Com_Film();
        break;
    
        case "#/art":
            d.getElementById("main").innerHTML = "art";
        break;
    }
};

