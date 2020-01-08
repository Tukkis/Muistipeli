const cards = document.getElementById("cards");
const start = document.getElementById("start");
const game = document.getElementById("game");
const counter = document.getElementById("time");
const animalsArr = ["kortit/Blob.jpg","kortit/Blob.jpg","kortit/Dog.jpg","kortit/Dog.jpg","kortit/Cat.jpg","kortit/Cat.jpg","kortit/Otter.jpeg","kortit/Otter.jpeg","kortit/Potato.jpg","kortit/Potato.jpg","kortit/Fish.jpg","kortit/Fish.jpg",];
let activeArr = [];
let actives = [];
let score = 0;
let clickDisabled = true;
let movesLeft = 0;

function cardPush(e){
    if(!clickDisabled){
        activeArr.push(e.target.dataset.pair);
        console.log(activeArr, e.target);
    }
}

function endGame(e){
    clickDisabled = true;
    const cardsLaid = document.querySelectorAll('.card');
    cardsLaid.forEach(card => card.classList.add('disabled')); 
    counter.textContent = 'Start a game';
}

function setCards(arr){
    cards.innerHTML = '';
    gameOver = false;
    clickDisabled = false;
    movesLeft = 15.5;
    counter.textContent = Math.floor(movesLeft);
    for(let i = 0; i < 12; i++){
        let node = document.createElement("div");
        let nodeInner = document.createElement("div");
        let nodeFront = document.createElement("div");
        let nodeBack = document.createElement("div");
        let nodeBackimg = document.createElement("img");
        let sourke = arr.splice(Math.floor(Math.random()*arr.length),1).join("")
        node.setAttribute("data-key", i + 1);
        node.setAttribute("class", "card");
        nodeFront.setAttribute("data-pair", sourke);
        nodeInner.setAttribute("class", "inner");
        nodeFront.setAttribute("class", "front");
        nodeBack.setAttribute("class", "back");
        nodeBackimg.setAttribute("src", sourke);
        let frontTextnode = document.createTextNode('cardback');
        nodeBack.appendChild(nodeBackimg);
        nodeFront.appendChild(frontTextnode);
        node.appendChild(nodeInner);
        nodeInner.appendChild(nodeFront);
        nodeInner.appendChild(nodeBack);
        cards.appendChild(node);
        node.addEventListener('click', function(e) {
            if(!clickDisabled && e.target.classList.contains('front')){
                clickDisabled=true;
                movesLeft=movesLeft-0.5;
                counter.textContent = Math.floor(movesLeft);
                node.classList.add("active");
                actives = document.querySelectorAll('.active');
                setTimeout(() => {clickDisabled=false}, 400)
                if (activeArr.length === 2 && activeArr[0] === activeArr[1]){
                    actives.forEach(active => {
                        active.classList.remove('active');
                        active.classList.add('disabled');
                    })
                    actives = [];
                    activeArr = [];
                    score++;
                } else if (activeArr.length === 2){
                    setTimeout(() => {clickDisabled=true}, 401);
                    setTimeout(() => {
                        actives.forEach(active => active.classList.remove('active'));
                        actives = [];
                        activeArr = [];
                    }, 1000);
                    setTimeout(() => {clickDisabled=false}, 1400);
                }

                if(score === 6){
                    endGame(1);
                    counter.textContent = `You won with ${Math.floor(movesLeft)} moves left!`;
                }

                if(movesLeft === 0.5){
                    endGame(1);
                    counter.textContent = `You lost with ${score} pairs quessed correct. Try again`;
                }
            }
        });
        nodeFront.addEventListener('click', cardPush);
    }
}

setCards(["bäk.png","bäk.png","bäk.png","bäk.png","bäk.png","bäk.png","bäk.png","bäk.png","bäk.png","bäk.png","bäk.png","bäk.png"]);
endGame(0);
