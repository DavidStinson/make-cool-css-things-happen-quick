const widthEl = document.querySelector("#width")
const heightEl = document.querySelector("#height")

window.visualViewport.addEventListener("resize", resizeHandler)

function resizeHandler(event) {
  widthEl.textContent = window.innerWidth
  heightEl.textContent = window.innerHeight
}

function init() {
  widthEl.textContent = window.innerWidth
  heightEl.textContent = window.innerHeight
}

init()