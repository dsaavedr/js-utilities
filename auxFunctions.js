const { log } = console;
const { PI, floor } = Math;

function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function point(x, y, c = "white", r = 2) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fillStyle = c;
    ctx.fill();
    //ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

function rect(x, y, w, h, stroke = false, fill = true, c = "white") {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    if (fill) {
        ctx.save();
        ctx.fillStyle = c;
        ctx.fill();
        ctx.restore();
    }
    if (stroke) {
        ctx.save();
        ctx.strokeStyle = c;
        ctx.stroke();
        ctx.restore();
    }
    ctx.closePath();
}

function rad2Ang(r) {
    return (r * 180) / Math.PI;
}

function random(min = 0, max = 1) {
    if (arguments.length === 1) {
        if (min != 0) {
            return Math.random() * min;
        } else {
            return Math.random();
        }
    }

    return Math.random() * (max - min) + min;
}

function rgb(r, g, b, a = 1) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}

function RGBtoHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;

            default:
                break;
        }
    }

    return [h * 360, s * 100, l * 100];
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        (s = h.s), (v = h.v), (h = h.h);
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            (r = v), (g = t), (b = p);
            break;
        case 1:
            (r = q), (g = v), (b = p);
            break;
        case 2:
            (r = p), (g = v), (b = t);
            break;
        case 3:
            (r = p), (g = q), (b = v);
            break;
        case 4:
            (r = t), (g = p), (b = v);
            break;
        case 5:
            (r = v), (g = p), (b = q);
            break;
    }
    var string =
        "rgb(" + Math.round(r * 255) + "," + Math.round(g * 255) + "," + Math.round(b * 255) + ")";
    return string;
}

function ctg(x) {
    return 1 / Math.tan(x);
}

function IX(x, y, N) {
    return x + y * N;
}

function constrain(n, min, max) {
    if (n < min) {
        return min;
    } else if (n > max) {
        return max;
    } else {
        return n;
    }
}
