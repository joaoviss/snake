/*
const snake = [new Head(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece(), new Piece()]
let fruit = new Fruit()
const chomp = new Audio()
chomp.src = './assets/chomp.mp3'
const scoreBoard = document.querySelector('.score')
let score = +scoreBoard.innerHTML
const lifeBoard = document.querySelector('.life')
let life = +lifeBoard.innerHTML

const eatFood = () => {
    if(fruit.hit(snake[0])) {
        chomp.play()
        scoreBoard.innerHTML = ++score
        fruit = new Fruit()
        snake.push(new Piece())
    }
}
const moveSnake = () => {
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].update(snake[i - 1].x, snake[i - 1].y)
    }
}
setInterval(() => {
    ctx.clearRect(0, 0, board.width, board.height)
    moveSnake()
    eatFood()
    snake[0].update()
    fruit.draw()
}, 200)
// */
let g = new Game()
g.play()