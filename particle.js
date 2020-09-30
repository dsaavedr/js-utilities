class Particle {
    constructor(pos, vel, c = 'white', r = 4) {
        this.pos = pos;
        this.acc = new Vector(0, 0);
        this.vel = vel;
        this.r = r;
        this.children = [];
        this.exploded = false;
        this.c = c,
            this.maxSpeed = 4,
            this.maxForce = 1;
    }

    applyForce(force) {
        this.acc = force;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.acc = new Vector(0, 0);
    }

    show() {
        point(this.pos.x, this.pos.y, this.c, this.r);
    }

    borders() {
        if (this.pos.x > WIDTH) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = WIDTH;
        } else if (this.pos.y > HEIGHT) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) {
            this.pos.y = HEIGHT;
        }
    }

    explode(n) {
        for (var i = 0; i < n; i++) {
            var temp = this.pos.copy();
            var vel = Vector.random().mult(random(-5, 5));
            this.children.push(new Particle(temp,
                vel,
                this.c, random(1.5, 2.5)));
        }
    }
}