BTN_START.addEventListener('click', () => {
    BTN_START.style.display = 'none'
    BTN_DIR.forEach(btn => {
        btn.style.display = 'block'
    })
    let game = new Game()
    game.play()
})