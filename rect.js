class Rect {
    constructor({ pos, size, stroke = false, fill = true, c = "white" }) {
        this.pos = pos;
        this.size = size;
        this.stroke = stroke;
        this.fill = fill;
        this.c = c;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        if (this.fill) {
            ctx.save();
            ctx.fillStyle = this.c;
            ctx.fill();
            ctx.restore();
        }
        if (this.stroke) {
            ctx.save();
            ctx.strokeStyle = this.c;
            ctx.stroke();
            ctx.restore();
        }
        ctx.closePath();
    }
}
