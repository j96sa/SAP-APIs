export function ArtDepartments(e){
    return `
        <a href="#/department"><section id="${e.departmentId}">${e.displayName}</section></a>
    `;
};

/*export function ArtCardGallery(e){
    return `
        <section class="art-card">
            <img src="${primaryImageSmall ?e.primaryImageSmall :"./app/assets/no-img.png"}">
            <p>${e.title}</p>
        </section>  
    `;
};*/