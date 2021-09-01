export function ArtDepartments(e){
    return `
        <a href="#/department_${e.displayName}"><section id="${e.departmentId}">${e.displayName}</section></a>
    `;
};

export function ArtCardGallery(e){
    return `
        <section class="art-card">
            <img src="${e.primaryImageSmall}">
            <p>${e.title}</p>
        </section>  
    `;
};