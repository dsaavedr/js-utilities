class Rect {
    constructor({
        pos,
        size,
        stroke = false,
        fill = true,
        fillColor = "white",
        strokeColor = "black"
    }) {
        this.pos = pos;
        this.size = typeof size === "number" ? new Vector(size, size) : size;
        this.stroke = stroke;
        this.fill = fill;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        if (this.fill) {
            ctx.save();
            ctx.fillStyle = this.fillColor;
            ctx.fill();
            ctx.restore();
        }
        if (this.stroke) {
            ctx.save();
            ctx.strokeStyle = this.strokeColor;
            ctx.stroke();
            ctx.restore();
        }
        ctx.closePath();
    }

    update({
        pos = this.pos,
        size = this.size,
        stroke = this.stroke,
        fill = this.fill,
        fillColor = this.fillColor,
        strokeColor = this.strokeColor
    }) {
        this.pos = pos;
        this.size = size;
        this.stroke = stroke;
        this.fill = fill;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;

        return this;
    }
}
