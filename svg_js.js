let drawing = false;
let polyline;
let points = "";
const svg = document.getElementById("svgBoard");
const clearBtn = document.getElementById("clearBtn");
svg.onmousedown = function (e) {
    drawing = true;
    points = "";

    polyline = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "polyline"
    );
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", "black");
    polyline.setAttribute("stroke-width", "3");

    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    points = x + "," + y;
    
    polyline.setAttribute("points", points);
    svg.appendChild(polyline);
};
svg.onmousemove = function (e) {
    if (!drawing) return;

    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    points += " " + x + "," + y;
    polyline.setAttribute("points", points);
};
svg.onmouseup = () => drawing = false;
svg.onmouseleave = () => drawing = false;
clearBtn.onclick = function () {
    svg.innerHTML = "";
};
