const btn = document.querySelector(".btn")
const notifyEl = document.querySelector(".notify")
let message = 0

let color = generateColor()

function generateColor() {
  let randColor = 0xffffff
  return "#" + toString(Math.floor(Math.random() * randColor))
}

console.log(color)

btn.addEventListener("click", (e) => {
  const divEl = document.createElement("div")
  divEl.classList.add("text")
  divEl.innerHTML = `Message ${message++}`
  notifyEl.appendChild(divEl)
  setTimeout(() => {
    divEl.remove()
  }, 2000)
})
