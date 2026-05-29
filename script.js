const container=document.querySelector("#container");

const input=document.getElementById("userinput");
let num,mode;
function createGrid(size){
    container.innerHTML="";
    const squareSize=700/size;
    for(let i=0;i<size*size;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;
        square.dataset.opacity=0;
        square.addEventListener("mouseenter",()=>{
            if(mode==="bnw"){
                square.style.backgroundColor="black";
            }
            if(mode==="rainbow"){
                const r=Math.floor(Math.random()*256);
                const g=Math.floor(Math.random()*256);
                const b=Math.floor(Math.random()*256);
                square.style.backgroundColor=`rgb(${r},${g},${b})`;
            }
            if(mode=="opacity"){

                let currentOpacity=Number(square.dataset.opacity);
                if(currentOpacity<1){
                    currentOpacity+=0.1;
                    square.dataset.opacity=currentOpacity;
                }
                square.style.backgroundColor=`rgba(0,0,0,${currentOpacity})`;
            }
        });
        container.appendChild(square);
}}

input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        if(input.value<=100){
            num=input.value;
            createGrid(num);
        }
        else{
            alert("Enter size between 1 to 100 !");
        }
    }
});

const bnw=document.querySelector("#bw");
bnw.addEventListener("click",()=>{
    mode="bnw";
});

const rainbow=document.querySelector("#rainbow");
rainbow.addEventListener("click",()=>{
    mode="rainbow";
});

const opacity=document.querySelector("#opacity");
opacity.addEventListener("click",()=>{
    mode="opacity";
});


