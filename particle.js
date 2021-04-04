class Particle extends Point {
    constructor(pos, vel, r = 4, c = "white") {
        super(pos, c, r);

        this.acc = new Vector(0, 0);
        this.vel = vel;
        this.r = r;
        this.children = [];
        this.exploded = false;
        this.c = c;
    }

    applyForce(force) {
        this.acc = force;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc = new Vector(0, 0);
    }

    show() {
        this.draw();
    }

    borders(t = 0) {
        /* 
        t lets you choose between two ways of handling canvas borders:
            t == 0  => wrap (default)
            else    => 'bounce' 
        */
        if (t == 0) {
            if (this.pos.x > WIDTH) {
                this.pos.x = 0;
            } else if (this.pos.x < 0) {
                this.pos.x = WIDTH;
            } else if (this.pos.y > HEIGHT) {
                this.pos.y = 0;
            } else if (this.pos.y < 0) {
                this.pos.y = HEIGHT;
            }
        } else {
            if ((this.pos.x > WIDTH) | (this.pos.x < 0)) {
                this.vel.x = -this.vel.x;
            } else if ((this.pos.y > HEIGHT) | (this.pos.y < 0)) {
                this.vel.y = -this.vel.y;
            }
        }
    }

    explode(n) {
        for (var i = 0; i < n; i++) {
            var temp = this.pos.copy();
            var vel = Vector.random().mult(random(-5, 5));
            this.children.push(new Particle(temp, vel, this.c, random(1.5, 2.5)));
        }
    }
}
