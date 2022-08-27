const btns = document.querySelectorAll('.btn')


const btnAnimation = e => {
    const top = e.clientY
    const left = e.clientX
    
    const btnTopPosition = e.target.offsetTop
    const btnLeftPosition = e.target.offsetLeft
    
    const insideBtnTop = top - btnTopPosition
    const insideBtnLeft = left - btnLeftPosition
    
    const circle = document.createElement('span')
    circle.classList.add('circle')

    
    circle.style.top = insideBtnTop + 'px'
    circle.style.left = insideBtnLeft + 'px'
    
    e.target.appendChild(circle)
   setTimeout(() => {
        circle.remove()
   }, 300);
}



btns.forEach(btn => btn.addEventListener('click', btnAnimation))