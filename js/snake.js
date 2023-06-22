class Snake {
    constructor() {
        this.body = [new Head()]//, new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece()]
    }
    init() {
        addEventListener('keydown', ({keyCode}) => {
            switch (keyCode) {
                case 37: if (this.body[0].speed.x == 0) this.body[0].speed = {x: -1, y: 0}; break;
                case 38: if (this.body[0].speed.y == 0) this.body[0].speed = {x: 0, y: -1}; break;
                case 39: if (this.body[0].speed.x == 0) this.body[0].speed = {x: 1, y: 0}; break;
                case 40: if (this.body[0].speed.y == 0) this.body[0].speed = {x: 0, y: 1}; break;
                default: break;
            }
        })
        document.querySelectorAll('.controls button')
        .forEach(button => {
            button.addEventListener('click', ({target}) => {
                switch (target.id) {
                    case 'left': if (this.body[0].speed.x == 0) this.body[0].speed = {x: -1, y: 0}; break;
                    case 'up': if (this.body[0].speed.y == 0) this.body[0].speed = {x: 0, y: -1}; break;
                    case 'right': if (this.body[0].speed.x == 0) this.body[0].speed = {x: 1, y: 0}; break;
                    case 'down': if (this.body[0].speed.y == 0) this.body[0].speed = {x: 0, y: 1}; break;
                    default: break;
                }
            })
        })
    }
    eat = (fruit) => this.body[0].hit(fruit)
    grow = () => this.body.push(new Piece())
    out = () => this.body[0].out()
    crash = () => this.body.slice(1,-1)
        .map(piece => piece.hit(this.body[0]))
        .reduce((acc, cur) => acc || cur, false)
    reset = () => this.body[0].reset()
    update() {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].update(this.body[i - 1].x, this.body[i - 1].y)
        }
        this.body[0].update()
    }
}