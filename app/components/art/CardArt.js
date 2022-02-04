export function ArtDepartments(e){
    return `
        <a href="#/department"><section id="${e.departmentId}">${e.displayName}</section></a>
    `;
};