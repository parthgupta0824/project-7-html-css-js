let section = document.querySelector('section')
let playerLivesCount = document.querySelector('span')
let playlive = 100

playerLivesCount.textContent = playlive

// generate the data 
// if arrow function do not have {} these brackets then arrow function will return the data in array which is inside [] these brackets  
let getdata = () => [
    { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 6, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
];


// randomizer
let randomize = () => {
    let data = getdata()
    data.sort(() => Math.random() - 0.5)
    return data
}

// card generator
let cardGenerator = () => {
    let carddata = randomize();
    // generating html
    carddata.forEach((item, index) => {

        let card = document.createElement('div')
        let face = document.createElement('img')
        let back = document.createElement('div')
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'


        section.append(card);
        card.appendChild(face)
        card.appendChild(back)

        face.src = item.imgSrc
        card.setAttribute('name', item.name);

        card.addEventListener('click', (e) => {
            card.classList.toggle('togglecard')
            checkcard(e)
        })
    })
}

let checkcard = (e) => {
    let clickcard = e.target
    clickcard.classList.add('flipped')
    let flippedcard = document.querySelectorAll('.flipped')
    let togglecard = document.querySelectorAll('.togglecard')
    // logic
    if (flippedcard.length === 2) {
        if (flippedcard[0].getAttribute('name') === flippedcard[1].getAttribute('name')) {
            console.log("boom")
            flippedcard.forEach(card => {
                card.classList.remove('flipped')
                card.style.pointerEvents = "none"
            })


        }
        else {
            console.log("noboom")
            flippedcard.forEach(card => {
                card.classList.remove('flipped')
                setTimeout(() => card.classList.remove('togglecard'), 1000);
            })

        }
        playlive--;
        playerLivesCount.textContent = playlive
        if (playlive === 0) {
            setTimeout(() => { 
                restart("try again")
            }, 500);

        }
    }

    if(togglecard.length === 16){
        setTimeout(() => { 
            restart("you won")
        }, 500);

    }

}

let restart = (text) => {
    let carddata = randomize();
    let faces = document.querySelectorAll('.face')
    let card = document.querySelectorAll('.card')
    section.style.pointerEvents = "none"
    carddata.forEach((item, index) => {
        card[index].classList.remove('togglecard')
        setTimeout(() => {
            card[index].style.pointerEvents = "all"
            face[index].src = item.imgSrc
            card[index].setAttribute('name',item.name)
            section.style.pointerEvents = "all"
        }, 1000);
    })
    playlive = 6;
    playerLivesCount.textContent = playlive
    setTimeout(() => {
        window.alert(text)
    }, 100);
}


cardGenerator()