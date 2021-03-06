const d = document;
import api from "../../helpers/API_art.js";
import { Fetch_Request } from "../../helpers/Fetch_Request.js";
import {F_ComInput} from "../movies/F_ComInput.js";
import { ArtDepartments } from "./CardArt.js";
import { LoaderElement} from "../../assets/Loader.js";

export function Comp_Art_Home(){
    d.getElementById("main").innerHTML = F_ComInput();
    d.querySelector(".input-section input").placeholder = "Search all museums...";
    d.getElementById("switch-button").innerHTML = "Find an artist";
    d.querySelector(".switch-container").classList.replace("switched-film","switched-art");
    d.querySelector(".film_card-content > h2").innerText = "Find a work of art in one of the following departments";
    d.querySelector(".film_card-content .film-content").classList = "art-content";
            
    d.querySelector(".film_card-content > h2.subtitle").insertAdjacentElement("afterend",LoaderElement())
    Fetch_Request({
        url:api.Departments,
        res:(res)=>{            
            let html = "";
            res.departments.forEach(e=>html += ArtDepartments(e));
            d.querySelector(".art-content").innerHTML = html;             
            d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
        }
    });
};