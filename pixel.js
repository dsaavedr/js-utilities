class Pixel {
    constructor(r = 0, g = 0, b = 0, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    avg() {
        return (this.r + this.g + this.b) / 3;
    }

    grayScale() {
        const avg = Math.round(this.avg());
        return new Pixel(avg, avg, avg, this.a);
    }

    data() {
        return [this.r, this.g, this.b, this.a];
    }

    luminance() {
        return this.r * 0.2126 + this.g * 0.7152 + this.b * 0.0722;
    }
}
