const main = document.querySelector(".main")

// for(let i = 0; i <= 98; i++){
//     const item = document.createElement("div")
//     item.className = `${i%2 === 0 ? 'triangle1' : 'triangle2'}`
//     main.appendChild(item)
// }


const mainContainer = document.querySelector(".main-container")

setInterval(() => {
    let x = Math.ceil(Math.random() * 1300)
    let y = Math.ceil(Math.random() * 600)

    let xAxis = x
    let yAxis = y

    const circle = document.createElement("div")
    circle.className = 'circle'
    circle.style.top = `${yAxis}px`
    circle.style.left = `${xAxis}px`

    if(y >= 1 && y <= 100){
        circle.style.background = `linear-gradient(#de09f1, #053df3)`
    }
    if(y >= 101 && y <= 200){
        circle.style.background = `linear-gradient(#09f11c, #f30525)`
    }
    if(y >= 201 && y <= 300){
        circle.style.background = `linear-gradient(#f19409, #6005f3)`
    }
    if(y >= 301 && y <= 400){
        circle.style.background = `linear-gradient(#09f1d2, #0df305)`
    }
    if(y >= 401 && y <= 500){
        circle.style.background = `linear-gradient(#f109a4, #05ebf3)`
    }
    if(y >= 501 && y <= 600){
        circle.style.background = `linear-gradient(#09f143, #3105f3)`
    }
    mainContainer.appendChild(circle)
    setTimeout(() => {
        mainContainer.removeChild(circle)
    }, 6000)
}, 5)