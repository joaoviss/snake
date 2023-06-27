class Game {
    loop
    constructor(lives = 3) {
        this.paused = false
        this.lives = lives
        this.score = 0
        this.snake = new Snake()
        this.fruit = new Fruit()
        this.scoreBoard = document.querySelector('.score')
        this.lifeBoard = document.querySelector('.life')
        this.chomp_sfx = document.querySelector('.chomp-sfx')
        this.death_sfx = document.querySelector('.death-sfx')
        this.oops_sfx = document.querySelector('.oops-sfx')
    }
    collision() {
        if (this.snake.eat(this.fruit)) {
            this.fruit = new Fruit()
            this.snake.grow()
            this.chomp_sfx.play()
            this.scoreBoard.innerHTML = ++this.score
        }
        if ((this.snake.crash()) || (this.snake.out())) {
            this.death_sfx.play()
            this.paused = true
            setTimeout(() => this.paused = false, 1000)
            this.snake.reset()
            this.lifeBoard.innerHTML = --this.lives
        }
    }
    
    round() {
        CTX.clearRect(0, 0, BOARD.width, BOARD.height)
        this.fruit.draw()
        this.snake.update()
        this.collision()
    }
    died() {
        this.oops_sfx.play()
        clearInterval(this.loop)
        BTN_START.style.visibility = 'visible'
        BTN_DIR.forEach(btn => {
            btn.style.visibility = 'hidden'
        })
        START.classList.toggle('close')
        START.classList.toggle('open')
    }
    play() {
        this.lifeBoard.innerHTML = this.lives
        this.scoreBoard.innerHTML = score
        this.loop = setInterval(() => {
            if (this.lives <= 0)
                this.died()
            else
                if (!this.paused)
                    this.round()
        }, 1000/4)
    }
}
