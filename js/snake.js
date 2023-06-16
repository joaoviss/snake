class Snake {
    constructor() {
        this.snake = [new Head()]//, new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece()]
        this.chomp = new Audio()
        this.chomp.src = './assets/chomp.mp3'
        this.death = new Audio()
        this.death.src = './assets/death.mp3'

    }
    init() {
        addEventListener('keydown', ({keyCode}) => {
            switch (keyCode) {
                case 37: if (this.snake[0].speed.x == 0) this.snake[0].speed = {x: -1, y: 0}; break;
                case 38: if (this.snake[0].speed.y == 0) this.snake[0].speed = {x: 0, y: -1}; break;
                case 39: if (this.snake[0].speed.x == 0) this.snake[0].speed = {x: 1, y: 0}; break;
                case 40: if (this.snake[0].speed.y == 0) this.snake[0].speed = {x: 0, y: 1}; break;
                default: break;
            }
        })
        document.querySelectorAll('.controls button')
        .forEach(button => {
            button.addEventListener('click', ({target}) => {
                switch (target.id) {
                    case 'left': if (this.snake[0].speed.x == 0) this.snake[0].speed = {x: -1, y: 0}; break;
                    case 'up': if (this.snake[0].speed.y == 0) this.snake[0].speed = {x: 0, y: -1}; break;
                    case 'right': if (this.snake[0].speed.x == 0) this.snake[0].speed = {x: 1, y: 0}; break;
                    case 'down': if (this.snake[0].speed.y == 0) this.snake[0].speed = {x: 0, y: 1}; break;
                    default: break;
                }
            })
        })
    }
    eat(fruit) {
        if(this.snake[0].hit(fruit)) {
            this.chomp.play()
            this.snake.push(new Piece())
            return true
        }
    }
    update() {
        for (let i = this.snake.length - 1; i > 0; i--) {
            this.snake[i].update(this.snake[i - 1].x, this.snake[i - 1].y)
        }
        this.snake[0].update()
    }
}
