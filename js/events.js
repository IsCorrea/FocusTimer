import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus,
  btnForestAudio,
  btnRainAudio,
  btnCafeAudio,
  btnFireAudio,
  btnLightMode,
  btnDarkMode,
} from './elements.js';


export default function Events ({sounds, controls, timer}) {

btnForestAudio.addEventListener('click', function() {
  sounds.pressForestBtn()
})

btnRainAudio.addEventListener('click', function() {
  sounds.pressRainBtn()
})

btnCafeAudio.addEventListener('click', function() {
  sounds.pressStoreBtn()
})

btnFireAudio.addEventListener('click', function() {
  sounds.pressFireBtn()
})

btnPlus.addEventListener('click', function() {
  let newMinutes = controls.addMinutes()
  timer.updateDisplay(newMinutes,0)
  timer.updateMinutes(newMinutes)
})

btnMinus.addEventListener('click', function() {
  let newMinutes = controls.removeMinutes()
  
  if (newMinutes <= 0) {
    newMinutes = 0
  }

  timer.updateDisplay(newMinutes,0)
  timer.updateMinutes(newMinutes)
})

btnPlay.addEventListener('click', function() {
  timer.countDown()
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
})

btnPause.addEventListener('click', function() {
  timer.hold()
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
})

btnStop.addEventListener('click', function() {
  timer.reset()  
  btnPlay.classList.remove('hide')
  btnPause.classList.add('hide')
})

btnLightMode.addEventListener('click', function() {
  controls.lightMode()
})

btnDarkMode.addEventListener('click', function() {
  controls.darkMode()
})
}
