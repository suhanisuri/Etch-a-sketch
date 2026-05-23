const container=document.querySelector("#container");

const input=document.getElementById("userinput");
let size;
input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        size=input.value;
        const squareSize=700/size;

    for(let i=0;i<size*size;i++){
    const square=document.createElement("div");
    square.classList.add("square");
    square.style.width=`${squareSize}px`;
    square.style.height=`${squareSize}px`;
    container.appendChild(square);
}
}
});
