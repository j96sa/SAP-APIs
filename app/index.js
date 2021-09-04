import App from "./App.js";

document.addEventListener("DOMContentLoaded",e=>{
    App();    
});


window.addEventListener("hashchange",e=>{    
    App();    
})


/**var event = new KeyboardEvent("keydown", {which:32,  key:' ', code:'Space',keyCode:32, charCode:32});
document.dispatchEvent(event); 
document.addEventListener("keydown",e=>{
    setTimeout(() => {
        console.log(e);
    }, 2000);
});

const event = new KeyboardEvent("keydown", {which:32,  key:' ', code:'Space',keyCode:32, charCode:32});

document.addEventListener("click",e=>{
    //document.dispatchEvent(event); 
    
});*/




