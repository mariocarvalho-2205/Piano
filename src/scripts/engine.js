const pianokeys = document.querySelectorAll('.piano-keys .key');
let audio = new Audio('src/tunes/a.wav')

const playtune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play()
};

pianokeys.forEach((key) => {
    // a propriedade dataset pega os valores contidos na variavel
    console.log(key.dataset.key)
    key.addEventListener('click', () => {
        playtune(key.dataset.key)
    })
})

document.addEventListener('keydown', (e) => {
    playtune(e.key)
    console.log(e.key)
})
