let x = 0;
let y = 0;
let spacing = 20;
let bg = 255;

function setup() {
    createCanvas(windowWidth, 600);
    background(bg);
}

function draw() {
    // overwrite the previous space
    noStroke();
    fill(bg);
    rect(x, y, spacing, spacing);

    // draw a diaganol line
    // 50% chance of either direction.
    stroke(0);
    // strokeWeight(2);
    if (random(1) > 0.9) {
        line(x, y, x + spacing, y + spacing);
    } else {
        line(x, y + spacing, x + spacing, y);
    }

    // update the x position
    x += spacing;

    // check canvas boundaries,
    // if greater than width, swing back,
    // like a typewriter
    if (x > width) {
        x = 0;
        y += spacing;
    }

    // if greater than height,
    // start back in the top-left corner
    if (y > height) {
        x = 0;
        y = 0;
    }
}
