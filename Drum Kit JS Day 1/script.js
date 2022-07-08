let clapEl =document.getElementById("clap");
let hithatEl =document.getElementById("hihat");
let kickEl =document.getElementById("kick");
let openhatEl =document.getElementById("openhat");
let boomEl =document.getElementById("boom");
let rideEl =document.getElementById("ride");
let snareEl =document.getElementById("snare");
let tomEl =document.getElementById("tom");
let tinkEl =document.getElementById("tink");


clapEl.addEventListener("click",function(){
    new Audio('./sounds/clap.wav').play();
})
hithatEl.addEventListener("click",function(){
    new Audio('./sounds/hihat.wav').play();
})
kickEl.addEventListener("click",function(){
    new Audio('./sounds/kick.wav').play();
})
openhatEl.addEventListener("click",function(){
    new Audio('./sounds/openhat.wav').play();
})
boomEl.addEventListener("click",function(){
    new Audio('./sounds/boom.wav').play();
})
rideEl.addEventListener("click",function(){
    new Audio('./sounds/ride.wav').play();
})
snareEl.addEventListener("click",function(){
    new Audio('./sounds/snare.wav').play();
})
tomEl.addEventListener("click",function(){
    new Audio('./sounds/tom.wav').play();
})
tinkEl.addEventListener("click",function(){
    new Audio('./sounds/tink.wav').play();
})

document.addEventListener('keydown',function (e){
    if(e.keyCode == 65){
        document.getElementById("cat").play();
    }
});
aa