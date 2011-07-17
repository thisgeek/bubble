require([
    'desk',
    'particle',
    'pivot'
], function (desk, particle, pivot) {

    var ctx = desk.init(window).context();
    var launcher = pivot.create(window.innerWidth / 2, window.innerHeight);
    var parts = [];

    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.lineWidth = 3;

    var move = function (thing) {
        // Velocity
        thing.x += thing.vx;
        thing.y -= thing.vy;
        // Walls
        if (thing.x > window.innerWidth - 20 || thing.x < 0) {
            thing.vx = thing.vx * -1;
        }
        // Ceiling
        if (thing.y < 10) {
            thing.vx = 0;
            thing.vy = 0;
            thing.y = 10;
        }

        return thing;
    };

    launcher.render(ctx);

    window.document.addEventListener('mousemove', function (event) {
        desk.clear(ctx);
        launcher.aim(event.clientX, event.clientY);
    });

    window.document.addEventListener('mouseup', function (event) {
        var speed = 20;
        parts.push(particle.create(
            window.innerWidth / 2,
            window.innerHeight,
            speed * Math.cos(launcher.angle) * launcher.neg,
            speed * Math.sin(launcher.angle) * launcher.neg
        ));
    });

    setInterval(function () {
        desk.clear(ctx);
        launcher.render(ctx);
        parts.map(function (part) {
            var p = move(part);
            part.render(ctx);
            return p;
        });
    }, 1000 / 60);

});
