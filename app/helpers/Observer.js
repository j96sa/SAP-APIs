export default function Observer(obs){       
    
    const cb =(entries)=>{        
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("active");
            }else{
                entry.target.classList.remove("active");
            };
        });
    };    

    const par = new IntersectionObserver(cb,{threshold:.1});
    obs.forEach(e=>par.observe(e));
};