const sounds = ['applause', 'boo', 'gasp','tada', 'victory', 'wrong' ]

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListner('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sounds => {
        const songs = doncument.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}