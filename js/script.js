const display = () => {
    if (localStorage) {
        if (localStorage.length != 0) {
            let ranking = localStorage.getItem('ranking')
            ranking = JSON.parse(ranking)
            ranking = Array.from(ranking)
            RANKING.innerHTML = '<li><span>hora</span><span>pontos</span></li>'
            for (let i = 0; i < 12; i++) {
                if (ranking[i] != undefined) {
                    let template = document.querySelector('.template').innerHTML
                    template = template.replace('$time', ranking[i].time)
                    template = template.replace('$score', ranking[i].score)
                    RANKING.innerHTML += template
                }
            }
        }
    }
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
