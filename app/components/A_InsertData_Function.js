//funcion para insertar los datos
export async function insertData(arr,cont){
    console.log("getIMG");
    const $fragment = d.createDocumentFragment();        

    for (let i=idIterator;i<idIterator+50;i++){
        let sect = d.createElement("section");
        sect.classList = "art-card";
        let img = d.createElement("img");
        let p = d.createElement("p");            
        
        if (i >= arr.length){
            false;
        }else{                
            Fetch_Request({
                url:`${api.ObjInfo}${arr[i]}`,
                res:(obj)=>{                            
                    //console.log(obj);
                    img.dataset.id = obj.objectID;
                    img.src = obj.primaryImageSmall ?obj.primaryImageSmall :"./app/assets/no-img.png";
                    p.innerText = obj.title;
                    sect.appendChild(img)
                    sect.appendChild(p)                        
                }
            });
        };                        
        $fragment.appendChild(sect);            
    };
    d.querySelector(".film_card-content .art-content").appendChild($fragment);
    //d.querySelector(".film_card-content > .loader-section").remove();                
    d.querySelector(".film_card-content > .loader-section").style.display = "none"; 
};