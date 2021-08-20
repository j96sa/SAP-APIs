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
            d.getElementById("main").innerHTML = "films";
        break;
    
        case "#/art":
            d.getElementById("main").innerHTML = "art";
        break;
    }
};

