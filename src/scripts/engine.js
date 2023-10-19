const pianokeys = document.querySelectorAll('.piano-keys .key');
let audio = new Audio('src/tunes/a.wav')
let volume = document.querySelector('.volume-slider input')
let keysCheck = document.querySelector('.keys-check input')
let mapedKey = [];


const playtune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {clickedKey.classList.remove('active')}, 150)
};

pianokeys.forEach((key) => {
    // a propriedade dataset pega os valores contidos na variavel
    key.addEventListener('click', () => playtune(key.dataset.key))
    mapedKey.push(key.dataset.key);
})

document.addEventListener('keydown', (e) => {
    if (mapedKey.includes(e.key)) {
        playtune(e.key)
    }
})

let handleVolume = (e) => {
    audio.volume = e.target.value
}

volume.addEventListener('input', handleVolume)

const showHideKeys = () => {
    pianokeys.forEach((key) => {
        key.classList.toggle('hide')
    })
}

keysCheck.addEventListener('click', showHideKeys)
//     console.log(pianoKeysSpan)
//     if (e.target.checked === true) {
//         pianoKeysSpan.classList.add('hide')
//     } else {
//         pianoKeysSpan.classList.remove('hide')
//     }

