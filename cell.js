class Cell {
    constructor(pos, live = true) {
        this.live = live;
        this.next = live;
        this.pos = pos;
    }

    draw(stroke = true) {
        const { x, y } = this.pos;

        ctx.beginPath();
        ctx.rect(x, y, CELL, CELL);
        ctx.closePath();
        if (this.live) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }

    die() {
        this.next = false;
    }

    breathe() {
        this.next = true;
    }

    update() {
        this.live = this.next;
    }
}
