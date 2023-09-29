const frequency = 1/15
const phraseList = [
	"jubba!",
	"i love jubba",
	"jubba = best",
	"osmows sucks"
]


document.addEventListener("mousemove", event => {
	if (Math.random() > frequency) return
	const phrase = phraseList[Math.floor(Math.random() * phraseList.length)]
	spawnPhrase(phrase, event.clientX, event.clientY)
})

const spawnPhrase = (phrase, x, y) => {
	const p = document.createElement("p")
	p.textContent = phrase
	p.style = `top: ${y - 8}px; left: ${x - 24}px;`
	p.classList.add("phrase")
	document.body.appendChild(p)
	setTimeout(() => { // wait for the element to render before moving it
		const theta = Math.random() * 2 * Math.PI
		x += 100 * Math.cos(theta)
		y += 100 * Math.sin(theta)
		p.style = `top: ${y - 8}px; left: ${x - 24}px; filter: opacity(0);`
	}, 10)
	setTimeout(() => {
		p.remove()
	}, 1500)
}