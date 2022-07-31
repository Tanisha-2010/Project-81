 var canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

 ctx.beginPath();
 ctx.strokeStyle = "grey";
 ctx.lineWidth = 5;
 ctx.rect(150, 143, 430, 300);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle = "blue";
 ctx.lineWidth = 3;
 ctx.arc(250, 210, 40, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle = "black";
 ctx.lineWidth = 3;
 ctx.arc(350, 210, 40, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle = "red";
 ctx.lineWidth = 3;
 ctx.arc(450, 210, 40, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle = "yellow";
 ctx.lineWidth = 3;
 ctx.arc(300, 260, 40, 0, 2 * Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle = "green";
 ctx.lineWidth = 3;
 ctx.arc(400, 260, 40, 0, 2 * Math.PI);
 ctx.stroke();