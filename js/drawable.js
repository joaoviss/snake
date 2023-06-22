class Drawable {
    constructor() {
        this.x = 0
        this.y = 10
    }
    draw() {
        CTX.arc(this.x * SCALE + RADIUS, this.y * SCALE + RADIUS,+ RADIUS, 0, Math.PI * 2)
        CTX.fill()
        CTX.stroke()
    }
    hit = (that) => (this.x == that.x) && (this.y == that.y)
}

class Head extends Drawable {
    constructor() {
        super()
        this.speed = {x: 1, y: 0}
        this.image = new Image()
        this.image.src = './img/eyes.png'
    }
    draw() {
        CTX.beginPath()
        super.draw()
        CTX.fillStyle = '#f00'
        CTX.fill()
        CTX.stroke()
        CTX.drawImage(this.image, this.x * SCALE, this.y * SCALE, SCALE, SCALE)
    }
    update() {
        if (this.speed.x < 0) this.x += (this.x >= 0) ? this.speed.x : GRID.w
        if (this.speed.x > 0) this.x += (this.x < GRID.w) ? this.speed.x : -GRID.w
        if (this.speed.y < 0) this.y += (this.y >= 0) ? this.speed.y : GRID.h
        if (this.speed.y > 0) this.y += (this.y < GRID.h) ? this.speed.y : -GRID.w
        this.draw()
    }
    reset = () => [this.x, this.y] = [0, 10]
    out = () => (this.x < 0) || (this.y < 0) || (this.x >= GRID.w) || (this.y >= GRID.h)
}

class Piece extends Drawable {
    constructor() {
        super()    
    }
    draw() {
        CTX.beginPath()
        super.draw()
        CTX.fillStyle = '#fa2'
    }
    update(x, y) {
        this.x = x
        this.y = y
        this.draw()
    }

}

class Fruit extends Drawable {
    constructor() {
        super()
        this.x = ~~(Math.random() * (GRID.w - 1))
        this.y = ~~(Math.random() * (GRID.h - 1))
        this.pic = ~~(Math.random() * 21)
        this.image = new Image()
        this.image.src = './img/fruits-21.png'
    }
    draw() {
        CTX.drawImage(this.image, this.pic * SCALE, 0, SCALE, SCALE, this.x * SCALE, this.y * SCALE, SCALE, SCALE)
    }
}