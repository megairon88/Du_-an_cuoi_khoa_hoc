function render() {
    //Cài đặt chay game
    let isWon = ((car.x === destination.x) && (car.y === destination.y));
    if (isWon) {
        cancelAnimationFrame(animationFrameID);
        return;
    }
    clearScreen();
    speedDisplay.innerHTML = "Tốc Độ: " + car.speed + " (Shift: tăng tốc, Space: giảm tốc)";
    gameScore += 1;
    scoreDisplay.innerText = "Điểm: " + gameScore ;
    //không cho người chơi vượt qua màn hình chơi
    if (car.x < car.width/2) {
        car.x = car.width/2
    }
    if (car.x > c.width - car.width/2) {
        car.x = c.width - car.width/2
    }
    if (car.y < car.height/2) {
        car.y = car.height/2
    }
    if (car.y > c.height - car.height/2) {
        car.y = c.height - car.height/2
    }
    //triệu hồi người chơi và điểm đến
    destination.draw();
    car.draw();
    //kẻ thù
    let enemyRow;
    for (enemyRow = 0; enemyRow < 4; enemyRow++ ) {
        let y = (enemyRow+1) * 100;
        let randomCondition = (enemyRow+1)/100
        if (Math.random() < randomCondition) {
            enemies.push(new Player(710,y,60,40,10,"black"));
        }
    }
    //triệu hồi kẻ thù
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].move(0);
        enemies[i].draw();
        //va chạm & và xóa kẻ thù khi ra ngoài màn chơi
        let distX = Math.abs(car.x - enemies[i].x);
        let distY = Math.abs(car.y - enemies[i].y);
        let isCollided = ((distX < (car.width + enemies[i].width)/2) && (distY < (car.height + enemies[i].height)/2));
        let isOffScreen = enemies[i].x < -enemies[i].width/2;
        if (isCollided) {
            enemies.splice(i,1);
            gameScore -= 100;
            alert("Game Over !")
        }
        if (isOffScreen) {
            enemies.splice(i,1);
        }
    }
    animationFrameID = requestAnimationFrame(render);
}
requestAnimationFrame(render);
