class Head extends Drawable {
    constructor() {
        super()
        this.speed = {x: 1, y: 0}
        this.image = new Image()
        this.image.src = './img/eyes.png'
        this.gameover = false
    }
    draw() {
        ctx.beginPath()
        super.draw()
        ctx.fillStyle = '#f00'
        ctx.fill()
        ctx.stroke()

        ctx.drawImage(this.image, this.x * scale, this.y * scale, scale, scale)
    }
    update() {
        /* 
        if (this.speed.x < 0)
        this.x += (this.x + this.speed.x >= 0) ? this.speed.x : grid.w - 1
        if (this.speed.y < 0)
        this.y += (this.y + this.speed.y >= 0) ? this.speed.y : grid.h - 1
        if (this.speed.x > 0)
        this.x += (this.x + this.speed.x < grid.w) ? this.speed.x : -(grid.w)
        if (this.speed.y > 0)
        this.y += (this.y + this.speed.y < grid.h) ? this.speed.y : -(grid.h)
        /*/
        if ((this.x > 0) ||
-        (this.y > 0) ||
        (this.x <= grid.w) ||
        (this.y <= grid.h)) {
            this.x += this.speed.x
            this.y += this.speed.y
        } else this.gameover = true
        this.draw()
        // */
    }
}
