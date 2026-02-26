const LEFT_LOWERCASE = "a"
const LEFT_UPPERCASE = "A"
const RIGHT_LOWERCASE = "d"
const RIGHT_UPPERCASE = "D"
const UP_LOWERCASE = "w"
const UP_UPPERCASE = "W"
const DOWN_LOWERCASE = "s"
const DOWN_UPPERCASE = "S"
const SHIFT = "Shift"
let state;

function setup() {
    createCanvas(0, 0);
}

function draw() {}


function keyPressed() {

    
    switch (key) {
        case LEFT_UPPERCASE:
        case LEFT_LOWERCASE:
    
            console.log("move left"); 
        break;
        
        case RIGHT_UPPERCASE:
        case RIGHT_LOWERCASE:

            console.log("move right");
        break;

        case UP_UPPERCASE:
        case UP_LOWERCASE:  

            console.log("move up");
        break;

        case DOWN_UPPERCASE:
        case DOWN_LOWERCASE:

            console.log("move down")
        break;

        case SHIFT:

        break;
        
        default:
            console.log("don`t move!")
            
    }
}