// mã key https://css-tricks.com/snippets/javascript/javascript-keycodes/

addEventListener("keydown", listenKeyPress);
function listenKeyPress(event) {
    let direction;
    switch (event.keyCode) {
        case 37:
            direction = 0;
            break;
        case 39:
            direction = 1;
            break;
        case 38:
            direction = 2;
            break;
        case 40:
            direction = 3;
            break;
        case 32:
            car.speed -= 1;
            break;
        case 16:
            car.speed += 1;
            break;
    }
    car.move(direction);
}
