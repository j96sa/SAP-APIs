import { S_CompInput } from "./S_ComInput.js";
import api from "../helpers/API_audio.js";
import { Fetch_Request } from "../helpers/Fetch_Request.js";

export function Com_Songs(){
    const d = document;
    document.getElementById("main").innerHTML = S_CompInput();

    const $submitButton = d.querySelector(".input-section img"),
    $input = d.querySelector(".input-section input");

    d.addEventListener("click",e=>{
        if (e.target === $submitButton){            
            console.log($input.value);  
            req($input.value)            
        };        
    });

    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){            
            console.log($input.value);
            req($input.value)                
        };
    });

    async function req(name){
        await Fetch_Request({
            url:`${api.Artist}${name}`,
            res:(res)=>{                

                console.log(res.artists[0]);
                let add = res.artists[0];
                getInfo(add.idArtist);

            }
        });
    }

    async function getInfo(URL){
        try {
            let req = await fetch(`${api.Albums}${URL}`),
            info = await req.json();

            console.log(info);
        } 
        catch(err) {
            console.log(err);
        }
    };

};