let slideNumber = document.getElementById("slide-number")
let previousButton = document.getElementById("prev")
let nextButton = document.getElementById("next")
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"))
let slidesCount = sliderImages.length
let currentSlide = 1;



nextButton.onclick = nextSlide ; 
previousButton.onclick = previousSlide ; 

let indicatorElement = document.createElement('ul')
indicatorElement.setAttribute("id",'indicator-ul')

for (let i = 1; i <= slidesCount ; i++) {
    let indicatorItem = document.createElement('li')
    indicatorItem.setAttribute('data-index' , i)
    indicatorItem.appendChild(document.createTextNode(i))
    indicatorElement.appendChild(indicatorItem)
}

document.getElementById('indicators').appendChild(indicatorElement)

let indicatorCreated = document.getElementById('indicator-ul')
let  indicatorBullets = Array.from(document.querySelectorAll("#indicator-ul li"))

for (let i=0 ; i < indicatorBullets.length ; i++) {
    indicatorBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute(`data-index`))
        theChecker()
    }
}

theChecker()

function nextSlide () {
    
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++
        theChecker();
    }
    
}

function previousSlide () {

    if (previousButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--
        theChecker();
    }

}

function theChecker () {

    slideNumber.textContent = `Slide # ${currentSlide} of ${slidesCount}`
    removeAllActive ()
    sliderImages[currentSlide -1].classList.add('active')
    indicatorCreated.children[currentSlide -1].classList.add("active")

    if (currentSlide == 1) {
        previousButton.classList.add('disabled')
    } else {
        previousButton.classList.remove('disabled')
    }

    if (currentSlide == slidesCount) {
        nextButton.classList.add('disabled')
    } else {
        nextButton.classList.remove('disabled')
    }

}

function removeAllActive () {

    sliderImages.forEach(function (img) {
        img.classList.remove("active")
    })

    indicatorBullets.forEach(function (li) {
        li.classList.remove("active")
    })
    
}