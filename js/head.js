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
        if ((this.x > 0) || (this.y > 0) || 
            (this.x <= grid.w) || (this.y <= grid.h)) {
            this.x += this.speed.x
            this.y += this.speed.y
        }
        this.draw()
    }
    reset() {
        [this.x, this.y] = [0, 10]
        this.speed = {x: 1, y: 0}
    }
}
