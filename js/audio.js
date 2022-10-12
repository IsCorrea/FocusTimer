import { 
  btnForestAudio,
  btnRainAudio,
  btnCafeAudio,
  btnFireAudio,
 } from "./elements.js"

export default function () {
  const forestAudio = new Audio('./assets/Floresta.wav')
  const rainAudio = new Audio('./assets/Chuva.wav')
  const storeAudio = new Audio('./assets/Cafeteria.wav')
  const fireAudio = new Audio('./assets/Lareira.wav')

  forestAudio.loop = true
  forestAudio.volume = 0.5
  rainAudio.loop = true
  storeAudio.loop = true
  fireAudio.loop = true

  function pressForestBtn () {
    forestAudio.play()
    rainAudio.pause()
    storeAudio.pause()
    fireAudio.pause()

    btnForestAudio.classList.add('selected')
    btnRainAudio.classList.remove('selected')
    btnCafeAudio.classList.remove('selected')
    btnFireAudio.classList.remove('selected')
  }

  function pressRainBtn () {
    forestAudio.pause()
    rainAudio.play()
    storeAudio.pause()
    fireAudio.pause()

    btnForestAudio.classList.remove('selected')
    btnRainAudio.classList.add('selected')
    btnCafeAudio.classList.remove('selected')
    btnFireAudio.classList.remove('selected')
  }

  function pressStoreBtn () {
    forestAudio.pause()
    rainAudio.pause()
    storeAudio.play()
    fireAudio.pause()

    btnForestAudio.classList.remove('selected')
    btnRainAudio.classList.remove('selected')
    btnCafeAudio.classList.add('selected')
    btnFireAudio.classList.remove('selected')
  }

  function pressFireBtn () {
    forestAudio.pause()
    rainAudio.pause()
    storeAudio.pause()
    fireAudio.play()

    btnForestAudio.classList.remove('selected')
    btnRainAudio.classList.remove('selected')
    btnCafeAudio.classList.remove('selected')
    btnFireAudio.classList.add('selected')
  }

  function timeEnd () {
    forestAudio.pause()
    rainAudio.pause()
    storeAudio.pause()
    fireAudio.pause()
  }

  return {
    pressForestBtn,
    pressRainBtn,
    pressStoreBtn,
    pressFireBtn,
    timeEnd
  }

}