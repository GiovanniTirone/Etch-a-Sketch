
const container = document.querySelector("#container");
console.log(container);
let rows = [];
let mat = [];
let numberSide=0;


function createSpace (numberSide){
    for(let i=0; i<numberSide; i++){
        rows[i]=document.createElement("div");
        rows[i].id="row"+i;
        rows[i].classList.add("row");
        container.appendChild(rows[i]);
        for(let j=0; j<numberSide; j++){
            mat[i,j]=document.createElement("div");
            mat[i,j].id=[i,j];
            mat[i,j].classList.add("square");
            rows[i].appendChild(mat[i,j]);
            console.log(mat[i,j]);
        };
    };
};

function askNumber (e){
    let mouse = e.target.getAttribute("id");
    if(mouse=="numSide"){
        container.innerHTML='';
        numberSide = prompt("Inserisci il numero di quadrati per ogni lato");
        if (numberSide>100){
            numberSide=prompt("Inserisci un numero minore di 100");
        };
        createSpace(numberSide);
        return numberSide;
    };
};

function coloring(e){
    let mouse = e.target.getAttribute("id");
        for(let i=0; i<numberSide; i++){       
            for(let j=0; j<numberSide; j++){
                let casella = [i,j].toString();
                if(mouse==casella){
                    console.log("mouse:"+mouse);
                    console.log("casella:"+casella);
                    let realCasella = document.getElementById(casella);
                    realCasella.classList.add("colored");
                    setTimeout(function(){
                        realCasella.classList.remove("colored");
                    },500);
                };
            };
            
        };
    
};

window.addEventListener("mouseover",coloring);

window.addEventListener("click",askNumber);

