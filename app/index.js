import App from "./App.js";

document.addEventListener("DOMContentLoaded",e=>{
    App();    
});


window.addEventListener("hashchange",e=>{
    App();
})




let x = Math.floor(Math.random()*1000)

console.log(x);