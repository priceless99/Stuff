const stuff = () => {
    let thediv = document.getElementById('div1');
    thediv.style.textAlignLast = 'center';
    let p = document.createElement('p');
    p.innerText = 'vroom vroom'
    thediv.appendChild(p)
    thediv.classList.add('class')
}
const crap = () => {
    let thediv = document.getElementById('div2')
    thediv.style.color = 'purple'
    let p = document.createElement('p')
    p.innerText = 'random gibberish'
    thediv.appendChild(p)
    thediv.classList.add('class')
}
const junk = () => {
    let junk = document.getElementById('div3')
    junk.style.textAlignLast = 'center'
    let img = document.createElement('img')
    img.src ='https://images.wallpaperscraft.com/image/lamborghini_murcielago_sports_car_stylish_76875_1920x1080.jpg'
    junk.appendChild(img)
    junk.classList.add('class')
    
}