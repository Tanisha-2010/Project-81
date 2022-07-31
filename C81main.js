var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200, 200, 10, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("clientX=" + e.clientX + " clientY=" + e.clientY);
    console.log("offsetX=" + canvas.offsetLeft + "offsetY=" + canvas.offsetTop);
    console.log("mouseX=" + mouseX + "mouseY=" + mouseY);

    circle(mouseX, mouseY);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.arc(mouse_x, mouse_y, 30, 0, 2 * Math.PI);
    ctx.stroke();
}

function clear_canvas() {
    ctx.clearRect(0, 0, 800, 600);
}