class Cell extends Rect {
    constructor(pos, size, live = true) {
        super(pos, size);

        this.live = live;
        this.next = live;
    }

    draw(stroke = true) {
        ctx.beginPath();
        ctx.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
        ctx.closePath();
        if (this.live) {
            ctx.fill();
            ctx.stroke();
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
