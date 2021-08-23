export default function Loader(){
    return `
        <section class="loader-section">
            <img id="loader" class="loader" src="./app/assets/tail-spin.svg" alt="img-loader">
        </section>
    `;

    /*let $section = document.createElement("section");
    $section.classList = "loader-section";
    let $img = document.createElement("img");
    $img.src = `./app/assets/tail-spin.svg`;
    $img.id = `loader`;
    $section.appendChild($img);

    return $section;*/
};