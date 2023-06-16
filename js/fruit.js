class Fruit extends Drawable {
    constructor() {
        super()
        this.x = ~~(Math.random() * (grid.w - 1))
        this.y = ~~(Math.random() * (grid.h - 1))
        this.pic = ~~(Math.random() * 21)
        this.image = new Image()
        this.image.src = './img/fruits-21.png'
    }
    draw() {
        ctx.beginPath()
        ctx.drawImage(this.image, this.pic * scale, 0, scale, scale, this.x * scale, this.y * scale, scale, scale)
    }
}