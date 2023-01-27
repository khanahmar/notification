const btn = document.querySelector(".btn")
const notifyEl = document.querySelector(".notify")
let message = 0
let color
function generateColor() {
  let randColor = 0xffffff
  return (
    "#" +
    Math.floor(Math.random() * randColor)
      .toString(16)
      .toLocaleUpperCase()
  )
}

console.log(color)

btn.addEventListener("click", (e) => {
  color = generateColor()
  const divEl = document.createElement("div")
  divEl.classList.add("text")
  divEl.style.color = color
  divEl.innerHTML = `Message ${message++}`
  notifyEl.appendChild(divEl)
  setTimeout(() => {
    divEl.remove()
  }, 2000)
})
