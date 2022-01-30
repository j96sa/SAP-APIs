import { S_CompInput } from "./S_ComInput.js";
import api from "../../helpers/API_audio.js";
import { Fetch_Request } from "../../helpers/Fetch_Request.js";
import { CardDisc, CardSing, CardSongs } from "./CardSing.js";
import {LoaderElement} from "../../assets/Loader.js";

export function Com_Songs(){
    const d = document;
    document.getElementById("main").innerHTML = S_CompInput();

    const $submitButton = d.querySelector(".input-section img"),
    $input = d.querySelector(".input-section input");
    d.querySelector(".film-content").classList = "artist-content";

    d.addEventListener("click",e=>{
        if (e.target === $submitButton){                          
            getArtist($input.value)            
        };
                
        if (e.target.matches(".artist-album img")){
            getSongs(e);
        };        
    });

    d.addEventListener("keydown",e=>{
        if (e.key === "Enter" && e.target === $input){                        
            getArtist($input.value)                
        };
    });

    async function getArtist(name){
        d.querySelector(".film_card-content .subtitle").insertAdjacentElement("afterend",LoaderElement());

        await Fetch_Request({
            url:`${api.Artist}${name}`,
            res:(res)=>{  
                //console.log(res);              
                if (res.artists === null){
                    console.log("Lo sentimos no existen coincidencias");
                    d.querySelector(".film_card-content .artist-content").innerHTML = `<h2 class="search-error">Lo sentimos; No se han encontrado coincidencias con: <span>"${name}"</span>.</h2>`;
                }else{
                    let dat = res.artists[0];                    
                    
                    d.querySelector(".film_card-content .artist-content").innerHTML = CardSing(dat);
                                                                                                    
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
                            d.querySelector(".artist-content .artist-article").insertAdjacentElement("afterend",art);
                            art.insertAdjacentElement("beforebegin",h3);
                            
                            //CLASES PARA SUSTITUIR Y PODER CUMPLIR LAS VALIDACIONES
                            let remove = d.createElement("div")
                            remove.classList = "album-tracks";
                            art.appendChild(remove);
                            let full = d.createElement("div");
                            full.classList = "artist-album";
                            full.style.display = "none";
                            let img = d.createElement("img");
                            img.classList = "full";
                            full.appendChild(img);
                            art.appendChild(full);                                                        

                            let html = "";                            
                            albums.forEach(e=>html += CardDisc(e));                            
                            d.querySelector(".artist-content .artist_albums-all").innerHTML += html;                            
                        } 
                        catch(err) {
                            console.log(err);
                        }
                    };                    
                };
            }
        });
        d.querySelector(".film_card-content .loader-section").remove();
    };

    async function getSongs(e){
        if(!e.target.classList.contains("full")){
            d.querySelector(`.artist-album img[class="full"]`).classList = "";
            e.target.classList = "full";            
    
            await Fetch_Request({
                url:`${api.AlbumsSongs}${e.target.dataset.id}`,
                res:(res)=>{
                    d.querySelector(".artist_albums-all .album-tracks").remove();
    
                    let arr = res.track;                    
                    let div = d.createElement("div");
                    div.classList = "album-tracks";
                    
                    arr.forEach(e=>div.innerHTML += CardSongs(e));    
                    e.target.parentElement.insertAdjacentElement("afterend",div)                                                                            
                }
            })
        }else{            
            d.querySelector(".artist_albums-all .album-tracks").remove();
            e.target.classList = "";
            d.querySelector(".artist-album img").classList = "full";

            let remove = d.createElement("div");
            remove.classList = "album-tracks";
            d.querySelector(".artist_albums-all").appendChild(remove);
        };    
    };
};