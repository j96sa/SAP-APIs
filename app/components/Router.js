import { Com_Art } from "./Com_Art.js";
import { Com_Film } from "./Com_Film.js";
import { Com_Home } from "./Com_Home.js";
import { Com_Songs } from "./Com_Songs.js";

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
            Com_Songs();
        break;

        case "#/films":
            Com_Film();            
        break;
    
        case "#/art":   
            Com_Art();
        break;
    }
};

