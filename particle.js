class Particle {
    constructor(pos, vel, c = 'white', r = 4) {
        this.pos = pos;
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
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc = new Vector(0, 0);
    }

    show() {
        point(this.pos.x, this.pos.y, this.c, this.r);
    }

    explode(n) {
        for (var i = 0; i < n; i++) {
            var temp = this.pos.copy();
            var vel = Vector.random().mult(random(-5, 5));
            this.children.push(new Particle(temp,
                vel,
                this.c, 2));
        }
    }
}