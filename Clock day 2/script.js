let hourEl = document.getElementById("hour-hand");
let minEl = document.getElementById("min-hand");
const secEl = document.getElementById("sec-hand");

function setSec (){

    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour= date.getHours();
    const secDegree = ((sec/60)*360)+90;
    const minDegree = ((min/60)*360)+90;
    const hourDegree = ((hour/12)*360)+90;

   secEl.style.transform = ` translateX(1.75rem) rotate(${secDegree}deg)`;
   hourEl.style.transform = `translateX(1.75rem)  rotate(${hourDegree}deg)`;
   minEl.style.transform  = `translateX(1.75rem)  rotate(${minDegree}deg)`;


}
setInterval(setSec,1000);
