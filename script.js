gsap.from('span', {duration: 1, y: '-100%', ease: 'bounce', stagger: .2})

gsap.from('button', {duration: 1, opacity: 0, delay: 2})

//reset default ball colors
const resetColor = document.querySelector('.btn-1')

resetColor.addEventListener('click', ()=>{
    document.querySelector('.letter-5').style.setProperty('background-color', 'hsl(287, 82%, 28%, 0.75)')
    document.querySelector('.letter-4').style.setProperty('background-color', 'hsl(327, 58%, 55%, 0.75)')
    document.querySelector('.letter-2').style.setProperty('background-color', 'hsl(18, 95%, 68%, 0.75)')
    document.querySelector('.letter-1').style.setProperty('background-color', 'hsl(33, 81%, 66%, 0.75)')
  })

//reverse default ball colors
const reverseColor = document.querySelector('.btn-2')

reverseColor.addEventListener('click', ()=>{
  document.querySelector('.letter-1').style.setProperty('background-color', 'hsl(287, 82%, 28%, 0.75)')
  document.querySelector('.letter-2').style.setProperty('background-color', 'hsl(327, 58%, 55%, 0.75)')
  document.querySelector('.letter-4').style.setProperty('background-color', 'hsl(18, 95%, 68%, 0.75)')
  document.querySelector('.letter-5').style.setProperty('background-color', 'hsl(33, 81%, 66%, 0.75)')
})

//randomize colors









