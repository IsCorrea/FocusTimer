import Audio from './audio.js';
import Events from './events.js';
import Controls from './controls.js'
import Timer from './timer.js';

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
  minutesDisplay,
  secondsDisplay,
  rangeVolumeForest,
  rangeVolumeRain,
  rangeVolumeCafe,
  rangeVolumeFire,
} from './elements.js'

const sounds = Audio()

const controls = Controls({
  btnPlay,
  btnPause,
  btnLightMode,
  btnDarkMode,
  minutesDisplay,
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events({sounds, controls, timer})
