export default function Controls({
  btnLightMode,
  btnDarkMode,
  minutesDisplay,
}) {

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
    addMinutes,
    removeMinutes,
    lightMode,
    darkMode,
  }

}