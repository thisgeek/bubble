define(function () {
    var pivot = {
        render: function (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 40, 0, Math.PI * 2, true);
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(
                this.x + this.l * Math.cos(this.angle) * this.neg,
                this.y - this.l * Math.sin(this.angle) * this.neg
            );
            ctx.stroke();
            return this;
        },
        aim: function (x, y) {
            // Assume this.y = 0
            var a = x - this.x;
            var b = this.y - y;
            this.neg = a / Math.abs(a);
            this.angle = Math.atan(b / a);
        }
    };

    return {
        create: function (x, y) {
            return Object.create(pivot, {
                x: {
                    value: x,
                    writable: true
                },
                y: {
                    value: y,
                    writable: true
                },
                l: {
                    value: 46
                },
                angle: {
                    value: Math.PI / 2,
                    writable: true
                }
            });
        }
    };
});
