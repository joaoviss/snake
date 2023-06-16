class Drawable {
    constructor() {
        this.x = 10
        this.y = 10
    }
    draw() {
        ctx.arc(this.x * scale + radius, this.y * scale + radius,+ radius, 0, Math.PI * 2)
        // ctx.rect(this.x * scale, this.y * scale, scale, scale)
        ctx.fill()
        ctx.stroke()
    }
    collision = (head) => (Math.hypot(scale * (this.x - head.x), scale * (this.y - head.y)) < 2 * radius) ? true : false
}