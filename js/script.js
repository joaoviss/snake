const display = () => {
    let ranking = localStorage.getItem('ranking')
    ranking = JSON.parse(ranking)
    ranking.sort().reverse()
    RANKING.innerHTML = ''
    ranking.forEach((score, I) => {
        let div = document.createElement('div')
        div.textContent = score
        RANKING.appendChild(div)
    })
}

const gameStart = () => {
    START.classList.toggle('close')
    START.classList.toggle('open');;
    BTN_START.style.visibility = 'hidden'
    BTN_DIR.forEach(btn => {
        btn.style.visibility = 'visible'
    })
    let game = new Game()
    game.play()
}

addEventListener('DOMContentLoaded', () => {
    display()
    BTN_START.addEventListener('click', gameStart, false)
})