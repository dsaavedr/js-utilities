class Boid extends Particle {
    align(boids){
        var avg = new Vector(0, 0);
        var perception = 100;
        var total = 0;
        
        for (var b of boids) {
            if (b != this && Vector.dist(this, b) < perception) {
                avg.add(b.vel);
                total++;
            }
        }

        if (total != 0) {
            avg.div(total);
        }
    }
}