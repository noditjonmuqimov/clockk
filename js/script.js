const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

function clock() {
    let date = new Date(),
        secArr = date.getSeconds() * 6,
        minArr = date.getMinutes() * 6,
        hourArr = date.getHours() * 30

    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000);
    hourNum.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    minNum.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()

}
clock()
const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContent[j].classList.remove('active')
        }
    tabsItem[i].classList.add('active')
    tabsContent[i].classList.add('active')
    })

}
const sekHours = document.querySelector('.stopwatch__hours')
const sekMinutes = document.querySelector('.stopwatch__minutes')
const sekSeconds = document.querySelector('.stopwatch__seconds')
const sekBtn = document.querySelector('.stopwatch__btn')
const span = document.querySelector('.tabsLink__span')

sekBtn.addEventListener("click", () => {
    if (sekBtn.innerHTML == "start") {
        sekBtn.innerHTML = 'stop'
        span.classList.add("active")
    } else if (sekBtn.innerHTML == "stop") {
        sekBtn.innerHTML = 'clear'
        span.classList.add("active_clear")
        span.classList.remove("active")
    } else if (sekBtn.innerHTML == "clear") {
        sekBtn.innerHTML = "start"
        span.classList.remove("active_clear")
        sekHours.innerHTML = 0;
        sekMinutes.innerHTML = 0;
        sekSeconds.innerHTML = 0;

    }
    // sekBtn.addEventListener("click", () => {
    //     if (sekBtn.innerHTML == "stop") {
    //         sekBtn.innerHTML == 'clear'
    //     }
    // })

})
function sek() {
    if (sekBtn.innerHTML == "stop") {
        sekSeconds.innerHTML++
        if (sekSeconds.innerHTML > 59) {
            sekSeconds.innerHTML = 0
            sekMinutes.innerHTML++;
        } else if (sekMinutes.innerHTML > 59) {
            sekMinutes.innerHTML = 0
            sekHours.innerHTML++
        }
    }
    setTimeout(() => {
        sek()
    }, 1000)
}
sek()