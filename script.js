const chairImages = ["images/chair-1.jpg ", "images/chair-2.jpg  ", "images/chair-3.jpg  ","images/chair-4.jpg " ]
let phoneCont = document.querySelector(".product-image")
let black = document.querySelector(".green");

let blue = document.querySelector(".red")

let pink = document.querySelector(".yellow")

let starlight= document.querySelector(".blue")



let defaultImgItems =`<img class='w-100' src= "${chairImages.at(0)}">`

phoneCont.innerHTML = defaultImgItems

let blueImgItems = `<img class='w-100' src= "${chairImages.at(1)}">`
let pinkImgItems = `<img class='w-100' src= "${chairImages.at(2)}">`
let starImgItems = `<img class='w-100' src= "${chairImages.at(3)}">`

black.addEventListener("click", function(){
    phoneCont.innerHTML=defaultImgItems
    })
blue.addEventListener("click", function () {
    phoneCont.innerHTML = blueImgItems
})

pink.addEventListener("click", function () {
    phoneCont.innerHTML = pinkImgItems
})

starlight.addEventListener("click", function () {
    phoneCont.innerHTML = starImgItems
})   