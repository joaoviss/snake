const gameStart = () => {
    START.classList.add('open')
    BTN_START.style.visibility = 'hidden'
    BTN_DIR.forEach(btn => {
        btn.style.visibility = 'visible'
    })
    let game = new Game()
    game.play()
}

addEventListener('DOMContentLoaded', () => {
    BTN_START.addEventListener('click', gameStart, false)
})