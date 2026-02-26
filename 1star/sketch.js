const LEFT_LOWERCASE = "a"
const LEFT_UPPERCASE = "A"
const RIGHT_LOWERCASE = "d"
const UP_LOWERCASE = "w"
const DOWN_LOWERCASE = "s"


function setup() {
    createCanvas(0, 0);
}

function draw() {}


function keyPressed() {
    switch (key) {
        case LEFT_UPPERCASE:
            console.log("move left");
            break;
        case LEFT_LOWERCASE:
            console.log("move left");
            break;

        case RIGHT_LOWERCASE:
            console.log("move right");
            break;

        case UP_LOWERCASE:  
            console.log("move up");
            break;

        case DOWN_LOWERCASE:
            console.log("move down")
            break;
        
        default:
            console.log("don`t move!")
            
    }
}