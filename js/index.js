import Audio from './audio.js';
import Events from './events.js';
import Controls from './controls.js'
import Timer from './timer.js';

import {
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
  btnForestAudio,
  btnRainAudio,
  btnCafeAudio,
  btnFireAudio,
  btnLightMode,
  btnDarkMode,
  minutesDisplay,
  secondsDisplay,
} from './elements.js'

const sounds = Audio()
const controls = Controls({
  btnLightMode,
  btnDarkMode,
  minutesDisplay,
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

Events({sounds, controls, timer})
