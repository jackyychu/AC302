var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var img = new Image();
img.src = "mario.png";
var imgTwo = new Image();
imgTwo.src = "pixel.png";
img.onload = function(){
ctx.drawImage(img,150,150,100,150);
}
imgTwo.onload = function(){
ctx.drawImage(imgTwo,0,150,150,150);

}

ctx.font="20px Arial";
ctx.fillStyle = "blue";
ctx.fillText("Mario Canvas", 50, 50);
