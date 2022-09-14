// **********selectors
let p = document.getElementsByTagName('p')[0]
let bird = document.getElementById('bird')
let wall = document.getElementById('wall')
let wall2 = document.getElementById('wall2')
let temp = 50
let wallMoving = -10
let mainHeight = document.getElementsByTagName("main")[0]
let _audio = document.getElementsByTagName('audio')[0]
let popUp = document.getElementsByClassName('pop-up')[0]
let restartBtn = document.getElementsByClassName('btn')[0]
let _score = document.getElementsByClassName('score')[0]
let _info = document.getElementsByClassName('info')[0]





// ********** put all elements in a function to add in interval
const _start = function () {
    bird.style.top = temp + "%"
    temp += 2
    wallMoving += 2
    wall.style.right = wallMoving + "%"
    wall2.style.right = wallMoving + "%"
    let random1
    let random2


    // start**********create a wall with random height
    if (wallMoving >= 100) {
        wallMoving = -10
    } else if (wallMoving <= -5) {
        let random1 = parseInt(Math.random() * 40)
        let random2 = parseInt(Math.random() * 40)
        if (random1 < 20 && random1 > 10 ? random2 += 25 : random1)
            if (random1 < 10 && random1 > 0 ? random2 += 35 : random1)
                if (random2 < 20 && random2 > 10 ? random1 += 25 : random2)
                    if (random2 < 10 && random2 > 0 ? random1 += 35 : random2)

                        wall.style.height = random1 + "%"
        wall2.style.height = random2 + "%"
    }
    // end**********create a wall with random height


    // start**********game-over(when the bird hits the wall)
    if ((((parseInt(wall.style.right)) > 77) && ((parseInt(wall.style.right)) < 83)) && (((parseInt((bird
            .offsetTop * 100) / mainHeight.clientHeight)) <= (parseInt(wall2.style.height))) || ((
            parseInt((bird.offsetTop * 100) / mainHeight.clientHeight) + 7) >= (parseInt((wall
            .offsetTop * 100) / mainHeight.clientHeight))))) {

        // alert("game over")
        clearInterval(_interval1)
        
        bird.style.display = 'none'
        popUp.style.visibility = 'visible'
        _info.textContent = `score : ${i}`
        clearInterval(_calc)
        _audio.play()
        _audio.currentTime = 0
        _score.innerHTML = ''
    }
    // end**********game-over(when the bird hits the wall)


    // start**********game-over(birds flying out of the window)
    if (bird.offsetTop >= (mainHeight.clientHeight - 50) || bird.offsetTop <= 0) {

        // alert("game over")
        clearInterval(_interval1)
        bird.style.display = 'none'
        popUp.style.visibility = 'visible'
        _info.textContent = `score : ${i}`
        clearInterval(_calc)
        _audio.play()
        _audio.currentTime = 0
        _score.innerHTML = ''
    }
    // end**********game-over(birds flying out of the window)
}





// start**********bird goes up & down with key & mouse
let tt = 0
window.addEventListener('keydown', (event) => {

    if (tt < 1) {


        if (event.keyCode == '32') {
            temp -= 20
            tt++
        }
    }

})
window.addEventListener('mousedown', (event) => {

    if (tt < 1) {
        temp -= 20
        tt++
    }

})
window.addEventListener('keyup', (event) => {

    if (tt == 1) {


        tt = 0
    }

})
window.addEventListener('mouseup', (event) => {

    if (tt == 1) {


        tt = 0
    }

})
// end**********bird goes up & down with key & mouse



_interval1 = setInterval(_start, 60);


// start **********reload the page with restart btn
restartBtn.addEventListener('click', () => {
    location.reload()
})
// end **********reload the page with restart btn



// start**********score
let i = 0

function calc() {
    if((((parseInt(wall.style.right)) > 77) && ((parseInt(wall.style.right)) < 83)))  {
    i++
    _score.innerHTML = i
    let scoresound = document.getElementsByTagName('audio')[1]
    scoresound.play()
    scoresound.currentTime = 0
    }
}
_calc = setInterval(() => {
    calc()
}, 150);
// end**********score

// sepehrghasemi.com
// https://codepen.io/sepehrghasemi
// https://www.linkedin.com/in/sepehr-ghasemi-4972b21ba/