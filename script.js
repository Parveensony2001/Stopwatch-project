
document.addEventListener("DOMContentLoaded",function(){
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
let second = '00';
let minute = '00';
let houre = '00';
let hr = document.getElementById("hr");
let min  = document.getElementById("min");
let sec = document.getElementById("sec");
let setInterval1;

function starttimer() {
  second++;
  if(second<9){
  sec.innerHTML = '0'+second;
}
  if(second>9){
  sec.innerHTML = second;
}
  if(second>59){
    minute++;
    min.innerHTML='0'+minute;
    second = 0;
    sec.innerHTML = '0'+0;
  }
  if(minute>9){
    min.innerHTML = minute;
  }
  if(minute>59){
    houre++;
    hr.innerHTML = '0'+houre;
    minute=0;
    min.innerHTML='0'+0;
  }
  if(houre>9){
    hr.innerHTML=houre;
  }
}
start.addEventListener("click",function(){
  setInterval1 = setInterval(starttimer);
})
stop.addEventListener("click",function(){
  clearInterval(setInterval1);
})
reset.addEventListener("click",function(){
  clearInterval(setInterval1);
   second = '00';
   minute = '00';
   houre = '00';
   sec.innerHTML="00";
   min.innerHTML="00";
   hr.innerHTML="00";
})
});
