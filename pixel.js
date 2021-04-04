class Pixel {
    constructor(r = 0, g = 0, b = 0, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    avg() {
        return (r + g + b) / 3;
    }

    grayScale() {
        const avg = this.avg();
        return new Pixel(avg, avg, avg, this.a);
    }
}
