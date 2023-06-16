class Game {
    constructor() {
        this.snake = new Snake()
        this.fruit = new Fruit()
        this.scoreBoard = document.querySelector('.score')
        this.score = +this.scoreBoard.innerHTML
        this.lifeBoard = document.querySelector('.life')
        this.life = +this.lifeBoard.innerHTML
    }
    eat() {
        if (this.snake.eat(this.fruit)) {
            this.scoreBoard.innerHTML = ++this.score
            this.fruit = new Fruit()
        }
    }
    play() {
        this.snake.init()
        const loop = setInterval(() => {
            ctx.clearRect(0, 0, board.width, board.height)
            this.fruit.draw()
            this.snake.update()
            this.eat()
        }, 1000/5);
    }
}
