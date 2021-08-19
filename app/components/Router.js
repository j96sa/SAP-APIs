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
            d.getElementById("main").innerHTML = "";
        break;

        case "#/films":
            d.getElementById("main").innerHTML = "";
        break;
    
        case "#/art":
            d.getElementById("main").innerHTML = "";
        break;
    }
};

