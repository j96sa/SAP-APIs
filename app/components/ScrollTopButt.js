const d = document;

export function ScrollTopButton(){
    d.addEventListener("scroll",e=>{
        let {scrollTop} = d.documentElement;
        if(scrollTop >= 2000){            
            d.getElementById("scroll-top").style.display = "block";
        }else{
            d.getElementById("scroll-top").style.display = "none";
        };
    });

    d.addEventListener("click",e=>{        
        if (e.target === d.querySelector("#scroll-top img")){
            window.scrollTo({behavior:"smooth",top:0});
        };
    });
};






