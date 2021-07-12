class Cannon 
{
    constructor(x, y, width, height, angle)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }

    display()
    {
        fill('#000000');
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        rect(-10, -20, this.width, this.height);
        arc(this.x - 40, this.y + 80, 180, 230, PI, TWO_PI);
        pop();
        noFill();
    }

}