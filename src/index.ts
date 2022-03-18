const body = document.querySelector("body");
const button = document.getElementById("chcolor");
const rsbutton = document.getElementById("rscolor");
const bgcolor = body.style.backgroundColor;

function random(num: 255): number {
    return Math.floor(Math.random() * num + 1);
}

function chbgcolor() {
    body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(
        255
    )})`;
}

function rscolor() {
    body.style.backgroundColor = bgcolor;
}

button.addEventListener("click", chbgcolor);
rsbutton.addEventListener("click", rscolor);
