const alphabetArray = "abcdefghijklmnopqrstuvwxyz?!()+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
let firstPassword = ""
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let randomPassword = ""

function generatePassWord(){

    for(let i = 0;i<16;i++){
       let m = Math.floor(Math.random() * 69)
        firstPassword += alphabetArray[m]
    }
    return firstPassword
    
}

function doSomething(){

    box1.textContent = ""
    box2.textContent = ""
    box3.textContent = ""
    box4.textContent = ""

    generatePassWord()
    box1.textContent = firstPassword
    firstPassword = ""
    generatePassWord()
    box2.textContent = firstPassword
    firstPassword = ""
    generatePassWord()
    box3.textContent = firstPassword
    firstPassword = ""
    generatePassWord()
    box4.textContent = firstPassword
    firstPassword = ""
    
}