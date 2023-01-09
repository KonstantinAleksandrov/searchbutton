const listItems = [...document.querySelectorAll('.list-item')]
const button = document.querySelector('.button')
const ul = document.querySelector('.list')
const svg = document.querySelector('svg')
let counter = 0

const time = setInterval(() => {

    if (!listItems[counter].style.opacity) {
        listItems[counter].style.opacity = getComputedStyle(listItems[0]).opacity
    }
    if (listItems[counter + 1]) {
        if (!listItems[counter + 1].style.opacity) {
            listItems[counter + 1].style.opacity = getComputedStyle(listItems[counter + 1]).opacity
        }
    }
    switch (counter) {
        case 0:
            {
                listItems[0].style.opacity -= 0.01
                listItems[1].style.opacity = 0.01 + +listItems[1].style.opacity
                if (listItems[0].style.opacity < 0) {
                    listItems[0].style.opacity = 0
                    listItems[1].style.opacity = 1
                    counter++
                }
                break;
            }
        case 1:
            {
                listItems[1].style.opacity -= 0.01
                listItems[2].style.opacity = 0.01 + +listItems[2].style.opacity
                if (listItems[1].style.opacity < 0) {
                    listItems[1].style.opacity = 0
                    listItems[2].style.opacity = 1
                    counter++
                }
                break;
            }
        case 2:
            {
                listItems[2].style.opacity -= 0.01
                listItems[3].style.opacity = 0.01 + +listItems[3].style.opacity
                if (listItems[2].style.opacity < 0) {
                    listItems[2].style.opacity = 0
                    listItems[3].style.opacity = 1
                    counter++
                }
                break;
            }
        case 3:
            {
                listItems[3].style.opacity -= 0.01
                listItems[4].style.opacity = 0.01 + +listItems[4].style.opacity
                if (listItems[3].style.opacity < 0) {
                    listItems[3].style.opacity = 0
                    listItems[4].style.opacity = 1
                    counter++
                }
                break;
            }
        case 4:
            {
                listItems[4].style.opacity -= 0.01
                listItems[0].style.opacity = 0.01 + +listItems[0].style.opacity
                if (listItems[4].style.opacity < 0) {
                    listItems[4].style.opacity = 0
                    listItems[0].style.opacity = 1
                    counter = 0
                }
                break;
            }
    }

}, 20)
button.addEventListener('click',()=>{
    clearInterval(time)
    ul.style.display = 'none'
    svg.style.display = 'block'
    button.style.width = '720px'
    button.style.height = '630px'
    button.addEventListener('transitionend',function qwe(){
        button.classList.add('activeAnimate')
        button.removeEventListener('transitionend',qwe)
    })
    listItems.forEach((item,index)=>{
        if(index === 0){
            item.style.opacity = 1
        }else{
            item.style.opacity = 0
        }
    })
})
