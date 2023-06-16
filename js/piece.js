class Piece extends Drawable {
    constructor() {
        super()    
    }
    draw() {
        ctx.beginPath()
        super.draw()
        ctx.fillStyle = '#fa2'
    }
    update(x, y) {
        this.x = x
        this.y = y
        this.draw()
    }
}
