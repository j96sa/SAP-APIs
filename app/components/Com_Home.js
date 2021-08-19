import {H_Section_Film, H_Section_Film_Com} from "./H_Section-Film.js";

export function Com_Home() {
    /*let article = document.createElement("article");
    article.id = `article-home`;
    document.getElementById("main").appendChild(article);*/
    document.getElementById("main").innerHTML = H_Section_Film_Com();
    H_Section_Film();
};
