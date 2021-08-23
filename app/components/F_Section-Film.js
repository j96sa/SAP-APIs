import { Fetch_Request } from "../helpers/Fetch_Request.js";
import api from "../helpers/API_movies.js";
import { CardFilm } from "./CardFilm.js";


export async function F_Section_Film(){
    await Fetch_Request({
        url:api.MediaPopular,
        res:(res)=>{
            console.log(res);

            let html = "";

            res.items.forEach(e=>html += CardFilm(e));

            document.getElementById("film-content").innerHTML += html;
        }
    });

    document.querySelectorAll(".film-content figure").forEach(e=>{
        e.style.background = `#${Math.floor(Math.random()*1000)}`;
    })
};