var timer = 60;
var score = 0;
var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.getElementById("hitval").textContent = hitrn;
}
function makeBubble(){
    var number = "";
    for(var i=0; i<=146; i++)
    {
        let ran = Math.floor(Math.random() * 10);
        number += `<div class="bubble">${ran}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = number;
}
function timerVal(){
    var timerClear = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").textContent = "Game over !";
            clearInterval(timerClear);
        }
    }, 1000);

}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function decreaseScore(){
    score -= 10;
    document.querySelector("#scoreval").textContent = score;
}
// *********** NOTES **************
// event bubbling : jispe hum click karenge , agar uspe event raise hoga agar uspe koi event nhi mila toh uska , parent pe event raise hoga aur agar uspe v nhi mile toh uska parent ki parent par event raise hoga.
// ** yaha paar id pbtm paar click event lagaye hai , jo (pbtm) saare bubble k parent hai,toh bubble pe click ho ya chaye white jagah (parent - pbtm) pe click ho , ye event listener chalega due to event bubbling.


document.querySelector("#pbtm") // event bubbling
.addEventListener("click",function(details){
    hitbtn = Number(details.target.textContent); // .target se kisi v query ko hum jaan pate hein - jispe click hua hain.

    if(hitrn === hitbtn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else{
        if(score!=0){
        decreaseScore();
        makeBubble();
        }
        else{
            makeBubble();
        }
    }

});


makeBubble();
timerVal();
getNewHit();
