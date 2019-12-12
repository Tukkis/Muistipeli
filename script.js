const cards = document.getElementById("cards");
const start = document.getElementById("start");
const game = document.getElementById("game");
const animalsArr = ["kortit/Blob.jpg","kortit/Blob.jpg","kortit/Dog.jpg","kortit/Dog.jpg","kortit/Cat.jpg","kortit/Cat.jpg","kortit/Otter.jpeg","kortit/Otter.jpeg","kortit/Potato.jpg","kortit/Potato.jpg","kortit/Fish.jpg","kortit/Fish.jpg",];
let activeArr = [];

function cardClick(){
        this.classList.add('active');
        activeArr.push(this);
        console.log(activeArr);
        if(activeArr.length =2 && activeArr[0] === activeArr[1]){
            activeArr=[];
        }  else if (activeArr.length < 2){
            return;
        } else if (activeArr.length = 2){
            let clicked = document.getElementById(activeArr[0]);
            let clickedD = document.getElementById(activeArr[1]);
            clicked.classList.remove('active');
            clickedD.classList.remove('active');
            activeArr=[];
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
        node.setAttribute("id", i + 1);
        node.setAttribute("class", "card");
        node.setAttribute("data-pair", sourke);
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
        node.addEventListener('click', cardClick);
    }
}

setCards(animalsArr);



