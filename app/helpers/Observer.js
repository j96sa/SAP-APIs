export default function effect(obs){
    const d = document,    

    const cb =(entries)=>{        
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                console.log(entry.target.id);
                entry.target.style.backgroundColor = `#fd0`;
                entry.target.classList.add("active");
            }else{
                console.log(`${entry.target.id}is not intersecting`);
                entry.target.style.backgroundColor = `#f30`;
                entry.target.classList.remove("active");
            };
        });
    };    

    const par = new IntersectionObserver(cb,{threshold:.2});
    obs.forEach(e=>par.observe(e));
};