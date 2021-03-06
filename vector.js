// Adaptation of the vector object from the p5.js library, 2D for now.

// TODO: comparing two identical vector objects always returns false, probably because of dir or mag calculation.

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.m = this.mag();
        this.dir = this.heading();
    }

    copy() {
        return new Vector(this.x, this.y);
    }

    set(x, y) {
        this.x = x;
        this.y = y;

        this.mag();
        this.heading();

        return this;
    }

    static add(v0, v1) {
        const r = new Vector(v0.x + v1.x, v0.y + v1.y);
        return r;
    }

    add(v0) {
        this.x += v0.x;
        this.y += v0.y;

        this.mag();
        this.heading();

        return this;
    }

    add(s0, s1) {
        this.x += s0;
        this.y += s1;

        this.mag();
        this.heading();

        return this;
    }

    static sub(v0, v1) {
        const r = new Vector(v0.x - v1.x, v0.y - v1.y);
        return r;
    }

    sub(v0) {
        this.x -= v0.x;
        this.y -= v0.y;

        this.mag();
        this.heading();

        return this;
    }

    sub(s0, s1) {
        this.x -= s0;
        this.y -= s1;

        this.mag();
        this.heading();

        return this;
    }

    mult(e) {
        if (e instanceof Vector) {
            this.x *= e.x;
            this.y *= e.y;
        } else {
            this.x *= e;
            this.y *= e;
        }

        this.mag();
        this.heading();

        return this;
    }

    div(e) {
        if (e instanceof Vector) {
            this.x /= e.x;
            this.y /= e.y;
        } else {
            this.x = this.x / e;
            this.y = this.y / e;
        }

        this.mag();
        this.heading();

        return this;
    }

    static dist(v1, v2) {
        const { sqrt, pow } = Math;
        const d = sqrt(pow(v1.x - v2.x, 2) + pow(v1.y - v2.y, 2));

        return d;
    }

    mag() {
        const { sqrt, pow } = Math;
        const i = sqrt(pow(this.x, 2) + pow(this.y, 2));

        this.m = i;

        return this.m;
    }

    setMag(m) {
        this.m = m;
        this.x = Math.cos(this.dir) * m;
        this.y = Math.sin(this.dir) * m;

        return this;
    }

    heading() {
        this.dir = Math.atan2(this.y, this.x);

        return this.dir;
    }

    static random() {
        // Random unit (m=1) vector
        const ang = random(-Math.PI, Math.PI);

        const x = Math.cos(ang);
        const y = Math.sin(ang);

        return new Vector(x, y);
    }

    static fromAngle(a) {
        const x = Math.cos(a);
        const y = Math.sin(a);

        return new Vector(x, y);
    }

    limit(max) {
        if (this.m > max) {
            this.setMag(max);
        }
    }

    equals(v) {
        if (!v instanceof Vector) {
            return false;
        }
        return (
            this.x == v.x && this.y == v.y && this.mag() == v.mag() && this.heading() == v.heading()
        );
    }
}
