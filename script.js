const container=document.querySelector("#container");

const input=document.getElementById("userinput");
let num;
function createGrid(size){
    container.innerHTML="";
    const squareSize=700/size;
    for(let i=0;i<size*size;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;

        square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor="black";
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

