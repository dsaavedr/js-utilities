class Point {
    constructor(pos, c = "white", r = 2) {
        this.pos = pos;
        this.c = c;
        this.r = r;
    }

    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.c;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}
