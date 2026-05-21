
//footer
function startClock() {
  const timer = document.getElementById("timer")
  const start = Date.now()

  const update = () => {
    const elapsed = Math.floor((Date.now() - start) / 1000)

    const m = Math.floor(elapsed / 60)
    const s = elapsed % 60

    timer.textContent = `${m}m ${s}s`
  }

  update()
  setInterval(update, 1000)
}

startClock()

//view image
const viewer = document.getElementById("imgview")
const viewerImg = viewer.querySelector("img")

document.querySelectorAll(".expandable").forEach(img => {
  img.addEventListener("click", () => {
    viewer.style.display = "flex"
    viewerImg.src = img.src
  })
})

viewer.addEventListener("click", () => {
  viewer.style.display = "none"
})