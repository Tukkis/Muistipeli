const cards = document.getElementById("cards");
const start = document.getElementById("start");
const game = document.getElementById("game");
const animalsArr = ["kortit/Blob.jpg","kortit/Blob.jpg","kortit/Dog.jpg","kortit/Dog.jpg","kortit/Cat.jpg","kortit/Cat.jpg","kortit/Otter.jpeg","kortit/Otter.jpeg","kortit/Potato.jpg","kortit/Potato.jpg","kortit/Fish.jpg","kortit/Fish.jpg",];
let activeArr = [];
let actives = [];
let score = 0;
let clickDisabled = false

function cardPush(e){
        if(!clickDisabled){
        activeArr.push(e.target.dataset.pair);
        console.log(activeArr, e.target);
        }
}

function setCards(arr){
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
            if(!clickDisabled){
            node.classList.add("active");
            actives = document.querySelectorAll('.active');
            if (activeArr.length === 2 && activeArr[0] === activeArr[1]){
                actives.forEach(active => {
                    active.classList.remove('active');
                    active.classList.add('disabled');
                })
                actives = [];
                activeArr = [];
                score++;
            } else if (activeArr.length === 2){
                actives.forEach(active => active.classList.remove('active'));
                actives = [];
                activeArr = [];
            }
        }
        });
        nodeFront.addEventListener('click', cardPush);
    }
}


setCards(animalsArr);



