export default function Controls({
  btnPlay,
  btnPause,
  btnLightMode,
  btnDarkMode,
  minutesDisplay,
}) {
  
  function reset() {
    btnPlay.classList.remove("hide")
    btnPause.classList.add("hide")
  }

  function addMinutes() {
    let minutes = Number(minutesDisplay.textContent)

    let newMinutes = minutes + 5
    return newMinutes
  }

  function removeMinutes() {
    let minutes = Number(minutesDisplay.textContent)

    let newMinutes = minutes - 5
    return newMinutes
  }

  function lightMode () {
    btnLightMode.classList.add('hide')
    btnDarkMode.classList.remove('hide')
    document.body.classList.add('dark')
  }

  function darkMode () {
    btnLightMode.classList.remove('hide')
    btnDarkMode.classList.add('hide')
    document.body.classList.remove('dark')
  }

  return {
    reset,
    addMinutes,
    removeMinutes,
    lightMode,
    darkMode,
  }

}
