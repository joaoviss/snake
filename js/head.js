class Head extends Drawable {
    constructor() {
        super()
        this.lives = 3
        this.speed = {x: 1, y: 0}
        this.image = new Image()
        this.image.src = './img/eyes.png'
        this.death_sfx = new Audio()
        this.death_sfx.src = './assets/death.mp3'
        this.death_sfx.loop = 0
        addEventListener('keydown', ({keyCode}) => {
            switch (keyCode) {
                case 37: if (this.speed.x == 0) this.speed = {x: -1, y: 0}; break;
                case 38: if (this.speed.y == 0) this.speed = {x: 0, y: -1}; break;
                case 39: if (this.speed.x == 0) this.speed = {x: 1, y: 0}; break;
                case 40: if (this.speed.y == 0) this.speed = {x: 0, y: 1}; break;
                default: break;
            }
        })
        document.querySelectorAll('.controls button')
        .forEach(button => {
            button.addEventListener('click', ({target}) => {
                switch (target.id) {
                    case 'left': if (this.speed.x == 0) this.speed = {x: -1, y: 0}; break;
                    case 'up': if (this.speed.y == 0) this.speed = {x: 0, y: -1}; break;
                    case 'right': if (this.speed.x == 0) this.speed = {x: 1, y: 0}; break;
                    case 'down': if (this.speed.y == 0) this.speed = {x: 0, y: 1}; break;
                    default: break;
                }
            })
        })
    }
    #randomizer = () => Math.random() < 0.5 ? -1 : 1
    draw() {
        ctx.beginPath()
        super.draw()
        ctx.fillStyle = '#f00'
        ctx.fill()
        ctx.stroke()
        ctx.drawImage(this.image, this.x * scale, this.y * scale, scale, scale)
    }
    update() {
        //* 
        if (this.speed.x < 0)
        this.x += (this.x + this.speed.x >= 0) ? this.speed.x : grid.w - 1
        if (this.speed.y < 0)
        this.y += (this.y + this.speed.y >= 0) ? this.speed.y : grid.h - 1
        if (this.speed.x > 0)
        this.x += (this.x + this.speed.x < grid.w) ? this.speed.x : -(grid.w)
        if (this.speed.y > 0)
        this.y += (this.y + this.speed.y < grid.h) ? this.speed.y : -(grid.h)
        /*/
        if (this.speed.x != 0) {
            if ((this.x + this.speed.x > 0) || (this.x < grid.w - 1)) {
                this.x += this.speed.x
            } else this.speed = {x: 0, y: 1}
        }
       if (this.speed.y < 0)
        this.y += (this.y + this.speed.y >= 0) ? this.speed.y : 0
        if (this.speed.y > 0)
        this.y += (this.y + this.speed.y < grid.h) ? this.speed.y : 0
        // */
        this.draw()
    }
}
