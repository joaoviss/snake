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
    rank(score) {
        if(localStorage.length == 0) 
            localStorage.setItem('ranking', `[]`)
        let result = localStorage.getItem('ranking')
        result = JSON.parse(result)
        result = Array.from(result)
        result.push({
            time:  new Date().toLocaleTimeString(),
            score: score
        })
        result = JSON.stringify(result)
        localStorage.setItem('ranking', result)
        display()
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
            setTimeout(() => {
                this.paused = false
                this.snake.reset()
            }, 1000)
            this.lifeBoard.innerHTML = --this.lives
        }
    }
    
    round() {
        CTX.clearRect(0, 0, BOARD.width, BOARD.height)
        this.fruit.draw()
        this.snake.update()
        this.collision()
    }

    die() {
        this.oops_sfx.play()
        clearInterval(this.loop)
        BTN_START.style.visibility = 'visible'
        BTN_DIR.forEach(btn => {
            btn.style.visibility = 'hidden'
        })
        if (this.score != 0) this.rank(this.score)
        START.classList.toggle('close')
        START.classList.toggle('open')
        display()
    }

    play() {
        this.lifeBoard.innerHTML = this.lives
        this.scoreBoard.innerHTML = score
        this.loop = setInterval(() => {
            if (this.lives <= 0)
                this.die()
            else
                if (!this.paused)
                    this.round()
        }, 350)
    }
}