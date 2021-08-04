// f5 màn hình chơi game
function clearScreen() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.rect(0, 0, c.width, c.height);
    ctx.fill();
}