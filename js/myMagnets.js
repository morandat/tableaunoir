/** Gale-Shapley */

function createMagnet(content) {
    let o = document.createElement("div");
    o.innerHTML = content;
    return o;
}




function createMagnetGS_B(content) {
    let o = document.createElement("div");
    o.innerHTML = content;
    o.classList.add("GS_B")
    return o;
}
function magnetGS() {
    MagnetManager.clearMagnet();
    MagnetManager.addMagnet(createMagnet(1))
    MagnetManager.addMagnet(createMagnet(2))
    MagnetManager.addMagnet(createMagnet(3))
    MagnetManager.addMagnet(createMagnetGS_B(1))
    MagnetManager.addMagnet(createMagnetGS_B(2))
    MagnetManager.addMagnet(createMagnetGS_B(3))

}

/** Sorting */

function createMagnetRainbow(content) {
    let o = createMagnet(content);
    let colors = ['rgb(139, 97, 195)', 'rgb(115, 97, 195)', 'rgb(93, 105, 214)', 'rgb(40, 167, 226)', 'rgb(40, 204, 226)', 'rgb(40, 226, 201)', 'rgb(40, 226, 148)',
        'rgb(40, 226, 102)', 'rgb(130, 226, 40)', 'rgb(170, 226, 40)', 'rgb(223, 226, 40)', 'rgb(226, 183, 40)',
        'rgb(226, 152, 40)', 'rgb(226, 124, 40)', 'rgb(226, 77, 40)', 'rgb(255, 0, 0)', 'rgb(144, 24, 24)'];
    o.style.backgroundColor = colors[content - 1];
    return o;
}


function magnetSorting() {
    MagnetManager.clearMagnet();
    for (let i = 1; i <= 17; i++)
        MagnetManager.addMagnet(createMagnetRainbow(i))
}

/** B-trees */

function magnetBTrees() {
    MagnetManager.clearMagnet();
    for (let i = 1; i <= 17; i++)
        MagnetManager.addMagnet(createMagnetRainbow(i))

    for (let i = 1; i <= 7; i++)
        MagnetManager.addMagnetImage("Btreenode.png");


}

/** Graphs */

function magnetGraphNodes() {
    MagnetManager.clearMagnet();
    for (let i of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'])
        MagnetManager.addMagnet(createMagnet(i))
}



/** Tilings */

function createTiling(leftColor, upColor, rightColor, bottomColor, leftText, upText, rightText, bottomText ) {
    let xmlns = "http://www.w3.org/2000/svg";
    var div = document.createElement("div");
    let size = 100;
    var svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", "0 0 " + size + " " + size);
    svgElem.setAttributeNS(null, "width", size);
    svgElem.setAttributeNS(null, "height", size);
    svgElem.style.display = "block";
    

    function createPath(pathDesc, color) {
        var path = document.createElementNS(xmlns, "path");
        path.setAttributeNS(null, 'stroke', "#333333");
        path.setAttributeNS(null, 'stroke-width', 10);
        path.setAttributeNS(null, 'stroke-linejoin', "round");
        path.setAttributeNS(null, 'd', pathDesc);
        path.setAttributeNS(null, 'fill', color);
        path.setAttributeNS(null, 'opacity', 1.0);
        return path;
    }
   
    svgElem.appendChild(createPath("M 50 50 L 0 0 L 0 100 Z", leftColor));
    svgElem.appendChild(createPath("M 50 50 L 0 0 L 100 0 Z", upColor));
    svgElem.appendChild(createPath("M 50 50 L 100 0 L 100 100 Z", rightColor));
    svgElem.appendChild(createPath("M 50, 50 L 100 100 L 0 100 Z", bottomColor));
    div.appendChild(svgElem);
    div.style.padding = "0px";
    return div;

}


function magnetTilings() {
    MagnetManager.clearMagnet();
    MagnetManager.addMagnet(createTiling("yellow", "red", "green", "red"));
    MagnetManager.addMagnet(createTiling("green", "red", "green", "yellow"));
    MagnetManager.addMagnet(createTiling("green", "red", "green", "yellow"));

    MagnetManager.addMagnet(createTiling("red", "red", "red", "red"));
    MagnetManager.addMagnet(createTiling("red", "yellow", "red", "green"));
    MagnetManager.addMagnet(createTiling("red", "yellow", "yellow", "yellow"));

    MagnetManager.addMagnet(createTiling("green", "red", "green", "yellow"));
    MagnetManager.addMagnet(createTiling("green", "green", "red", "green"));
    MagnetManager.addMagnet(createTiling("red", "yellow", "red", "green"));
}


function loadMagnets() {
    MagnetManager.register("magnetGS");
    MagnetManager.register("magnetSorting");
    MagnetManager.register("magnetBTrees");
    MagnetManager.register("magnetGraphNodes");
    MagnetManager.register("magnetTilings");

}




