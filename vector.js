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
        var r = new Vector(v0.x + v1.x, v0.y + v1.y);
        return r;
    }

    add(v0, v1 = null) {
        if (typeof v0 === 'object') {
            this.x += v0.x;
            this.y += v0.y;
        } else {
            this.x += v0;
            this.y += v1;
        }

        this.mag();
        this.heading();

        return this;
    }

    static sub(v0, v1) {
        var r = new Vector(v0.x - v1.x, v0.y - v1.y);
        return r;
    }

    sub(v0, v1 = null) {
        if (typeof v0 === 'object') {
            this.x -= v0.x;
            this.y -= v0.y;
        } else {
            this.x -= v0;
            this.y -= v1;
        }

        this.mag();
        this.heading();

        return this;
    }

    mult(e) {
        if (typeof e === 'object') {
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
        if (typeof e === 'object') {
            this.x = this.x / e.x;
            this.y = this.y / e.y;
        } else {
            this.x = this.x / e;
            this.y = this.y / e;
        }

        this.mag();
        this.heading();

        return this;
    }

    static dist(v1, v2) {
        var d = Math.sqrt(Math.pow((v1.x - v2.x), 2) + Math.pow((v2.x - v2.y), 2));

        return d;
    }

    mag() {
        var i = Math.pow(this.x, 2) + Math.pow(this.y, 2);

        this.m = Math.sqrt(i);

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
        var ang = random(-Math.PI, Math.PI);

        var x = Math.cos(ang);
        var y = Math.sin(ang);

        return new Vector(x, y);
    }

    static fromAngle(a) {
        var x = Math.cos(a);
        var y = Math.sin(a);

        return new Vector(x, y);
    }

    limit(max) {
        if (this.m > max) {
            this.setMag(max);
        }
    }
}