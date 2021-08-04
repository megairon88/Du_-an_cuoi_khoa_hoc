// gọi đối tượng người chơi và phương thức di chuyển

let Player = function Player(x, y, width, height, speed, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;

    this.draw = function () {
        ctx.beginPath();
        ctx.rect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    this.move = function(direction) {
        switch (direction) {
            case 0:
                this.x -= this.speed;
                break;
            case 1:
                this.x += this.speed;
                break;
            case 2:
                this.y -= this.speed;
                break;
            case 3:
                this.y += this.speed;
                break;
        }
    }
}
