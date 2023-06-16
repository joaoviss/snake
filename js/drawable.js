class Drawable {
    constructor() {
        this.x = 0
        this.y = 10
    }
    draw() {
        ctx.arc(this.x * scale + radius, this.y * scale + radius,+ radius, 0, Math.PI * 2)
        // ctx.rect(this.x * scale, this.y * scale, scale, scale)
        ctx.fill()
        ctx.stroke()
    }
    hit = (that) => ((this.x == that.x) && (this.y == that.y)) ? true : false
}

class Head extends Drawable {
    constructor() {
        super()
        this.speed = {x: 1, y: 0}
        this.image = new Image()
        this.image.src = './img/eyes.png'
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
        if ((this.x > 0) ||
        (this.y > 0) ||
        (this.x <= grid.w) ||
        (this.y <= grid.h)) {
            this.x += this.speed.x
            this.y += this.speed.y
            this.draw()
        }
    }
}

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
        ctx.drawImage(this.image, this.pic * scale, 0, scale, scale, this.x * scale, this.y * scale, scale, scale)
    }
}
