class Game {
    constructor(lives = 3) {
        this.lives = lives
        this.snake = new Snake()
        this.fruit = new Fruit()
        this.scoreBoard = document.querySelector('.score')
        this.score = +this.scoreBoard.innerHTML
        this.lifeBoard = document.querySelector('.life')
        this.chomp = new Audio()
        this.chomp.src = './assets/chomp.mp3'
        this.death = new Audio()
        this.death.src = './assets/death.mp3'
    }
    collision() {
        if (this.snake.eat(this.fruit)) {
            this.fruit = new Fruit()
            this.snake.grow()
            this.chomp.play()
            this.scoreBoard.innerHTML = ++score
            // if (this.score % 10 == 0) this.lifeBoard.innerHTML = ++this.lives
        }
        if (this.snake.crash()) {
            this.death.play()
            this.snake.reset() 
            this.lifeBoard.innerHTML = --this.lives
        }
        if (this.snake.out()) {
            this.death.play()
            this.lifeBoard.innerHTML = --this.lives
        }
    }
    round() {
        CTX.clearRect(0, 0, BOARD.width, BOARD.height)
        this.fruit.draw()
        this.snake.update()
        this.collision()
    }
    play() {
        this.snake.init()
        this.lifeBoard.innerHTML = this.lives
        this.scoreBoard.innerHTML = score
        const loop = setInterval(() => (this.lives <= 0) ? clearInterval(loop) : this.round(), 1000/3)
    }
}
