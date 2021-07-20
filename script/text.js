
let myCanvas = document.querySelector('canvas')
let confettiSettings = {target: myCanvas}
let confetti = new ConfettiGenerator(confettiSettings)
confetti.render()



let anim = gsap.timeline()
let randomValueX = Math.floor(Math.random()*200) + 100
let randomValueY = Math.floor(Math.random()*200) + 100

let span = window.getComputedStyle(document.querySelector('span')).fontSize
console.log(span)


anim.from(".first-word-animate span", {
		scale: (0, 0),
		opacity: 0,
		duration: 0.7,
		stagger: .35,
		ease: "elastic",
		x: `-${randomValueX}%`,
		y: `${randomValueX}%`,
})

.from(".second-word-animate span", {
		scale: (0, 0),
		opacity: 0,
		duration: 0.7,
		delay: 1,
		stagger: .2,
		ease: "elastic",
		x: `-${randomValueX}%`,
		y: `${randomValueX}%`,
})
anim.repeat(-1).repeatDelay(3)


