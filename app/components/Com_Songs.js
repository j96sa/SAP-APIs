import { S_CompInput } from "./S_ComInput.js";
import api from "../helpers/API_audio.js";
import { Fetch_Request } from "../helpers/Fetch_Request.js";
import { CardDisc, CardSing } from "./CardSing.js";

export function Com_Songs(){
    const d = document;
    document.getElementById("main").innerHTML = S_CompInput();

    const $submitButton = d.querySelector(".input-section img"),
    $input = d.querySelector(".input-section input");

    d.addEventListener("click",e=>{
        if (e.target === $submitButton){                          
            getArtist($input.value)            
        };        
    });

    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){                        
            getArtist($input.value)                
        };
    });

    async function getArtist(name){
        await Fetch_Request({
            url:`${api.Artist}${name}`,
            res:(res)=>{  
                //console.log(res);              
                if (res.artists === null){
                    console.log("Lo sentimos no existen coincidencias");
                    d.querySelector(".film_card-content .film-content").innerHTML = `<h2 class="search-error">Lo sentimos; No se han encontrado coincidencias con: <span>"${name}"</span>.</h2>`;
                }else{
                    let dat = res.artists[0];
                    //console.log(dat);
                    
                    d.querySelector(".film_card-content .film-content").innerHTML = CardSing(dat);
                                                                                                    
                    getAlbumsId(dat.idArtist);
                    async function getAlbumsId(URL){
                        try {
                            let req = await fetch(`${api.Albums}${URL}`),
                            info = await req.json();
                            
                            let albums = info.album;
                            //console.log(albums);
                                                        
                            let art = d.createElement("article"); 
                            art.classList = "artist_albums-all";
                            let h3 = d.createElement("h3");
                            h3.classList = "subtitle";
                            h3.innerText = "Discography & Songs";
                            d.querySelector(".film-content .artist-article").insertAdjacentElement("afterend",art);
                            art.insertAdjacentElement("beforebegin",h3);
                                                        
                            let html = "";                            
                            albums.forEach(e=>html += CardDisc(e));                            
                            d.querySelector(".film-content .artist_albums-all").innerHTML += html;
                        } 
                        catch(err) {
                            console.log(err);
                        }
                    };
                };
            }
        });
    }

    

};