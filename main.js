canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

canvas.addEventLister("mousedown", my_mouse_down);

function my_mouse_down(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("clientX=" + e.clientX + "clientY=" + e.clientY);
    console.log("offsetX=" + canvas.offsetLeft + "offsetY=" + canvas.offsetTop);
    console.log("mouseX=" + mouseX + "mouseY=" + mouseY);

    circle(mouseX, mouseY);
}

function circle(mouseX, mouseY) {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(250, 210, 40, 0, 2 * Math.PI);
}

function clear_canvas() {
    ctx.clearRect(0, 0, 800, 600);
}