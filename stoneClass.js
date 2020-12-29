class Stone{
    constructor(x,y,r)
    {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,50,50);
        pop();
    }
}