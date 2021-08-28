export async function Fetch_Request(props){
    let {url,res} = props;
    await fetch(url)
    .then(e=>e.ok ?e.json() :Promise.reject(e))           
    .then(e=>res(e))
    .catch(err=>{
        console.log(err); 
        document.getElementById("main").innerHTML = `
            <article class="err-dfault">
                ${window.matchMedia("(min-width: 860px)").matches ?`<img src="./app/assets/desktop-error-img.jpg" alt="err-img"></img>` :`<img src="./app/assets/error-img.jpg" alt="err-img"></img>`}
                <section>
                    <p>Sorry we are having trouble connecting to our database; Please try again later.</p>
                </section>                
            </article>
        `;              
    });
};

export async function Fetch_Request_Error(props){
    let {url,res,error} = props;
    await fetch(url)
    .then(e=>e.ok ?e.json() :Promise.reject(e))           
    .then(e=>res(e))
    .catch(err=>error(err));
};