class Snake {
    constructor() {
        this.body = [new Head()
        , new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece()]
    }
    grow = () => this.body.push(new Piece())
    eat = (fruit) => this.body[0].hit(fruit)
    out = () => this.body[0].out()
    crash = () => this.body.slice(1,-1).some(piece => piece.hit(this.body[0]))
    reset = () => this.body[0].reset()
    update() {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].update(this.body[i - 1].x, this.body[i - 1].y)
        }
        this.body[0].update()
    }
}
