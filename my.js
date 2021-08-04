//vẽ màn chơi
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let speedDisplay = document.getElementById("speedDisplay");
let scoreDisplay = document.getElementById("scoreDisplay");

//màn chơi
c.style.border = "1px solid black";
c.width = 700;
c.height = 500;
let gameScore = 0;

// gọi đối tượng
let carHeight = 45;
let car = new Player(c.width/2, carHeight /2 , 30, carHeight, 12, "red");
let destination = new Player(c.width - car.width/2, c.height - car.height/2, car.width, car.height, null, "yellow");
let enemies = [];
let animationFrameID;