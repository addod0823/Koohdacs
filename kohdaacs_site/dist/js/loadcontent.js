const contentArea = document.getElementById("content-area-row");

fetch("http://localhost:3000/BoardMembers")
.then((response) => response.json())
.then((members) => {
    for (let i = 0; i < members.length; i++)
    {
        addContent(contentArea, members[i]);
    }
})

function addContent(contentAreaElement, member) {
    const contentArea = contentAreaElement;
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute('class', 'col');

    const secondDiv = document.createElement("div");
    secondDiv.setAttribute('class', 'card shadow-sm');

    const bodyDiv = document.createElement("div");
    bodyDiv.setAttribute('class', 'card-body ');

    const description = document.createElement("p");
    const title = document.createElement("strong");
    title.innerText = member.name;
    description.innerText = member.description;
    description.setAttribute('class', 'card-text');

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'bd-placeholder-img card-img-top');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '225');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Placeholder: Thumbnail');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.setAttribute('focusable', 'false');


    const svgimg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    svgimg.setAttributeNS(null, 'height', '100%');
    svgimg.setAttributeNS(null, 'width', '100%');
    svgimg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', member.image);
    svgimg.setAttributeNS(null, 'x', '10');
    svgimg.setAttributeNS(null, 'y', '10');
    svgimg.setAttributeNS(null, 'visibility', 'visible');

    description.append(title);
    svg.append(svgimg);
    bodyDiv.append(title);
    bodyDiv.append(description);

    secondDiv.append(svg);
    secondDiv.append(bodyDiv);
    mainDiv.append(secondDiv);

    contentArea.append(mainDiv);

    return;

}