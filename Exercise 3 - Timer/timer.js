let timeInseconds = 0;
let count;
let isCounting = false;

function displayUpdate(){
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds % 3600) / 60);
    let seconds = timeInSeconds % 60;
    let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('displayTimer').textContent = formattedTime;
}
function addSecond(){
    if(!isCounting){
        timeInSeconds = timeInSeconds + 1;
        displayUpdate();
    }
}
function subtractSecond(){
    if(!isCounting){
        timeInSeconds = Math.max(timeInSeconds - 1 , 0);
        displayUpdate();
    }
}
function reset(){
    if(!isCounting){
        timeInSeconds = 0;
        displayUpdate();
    }
}
function toggleCount(){
    if (isCounting){
        clearInterval(count);
        document.getElementById("starting-stopping-button").textContent = "start";
    } else {
        document.getElementById("starting-stopping-button").textContent = "stop";
        count = setInterval(function (){
            timeInSeconds = Math.max(timeInSeconds - 1, 0);
            displayUpdate();
            if (timeInSeconds === 0 ){
                clearInterval(count);
                document.getElementById("starting-stopping-button").textContent = "start"
            } }, 1000);

        }
        isCounting = !isCounting;
    }
    document.getElementById('adding-button').addEventListener('click', addSecond);
  document.getElementById('subtracting-button').addEventListener('click', subtractSecond);
  document.getElementById('reseting-button').addEventListener('click', reset);
  document.getElementById('starting-stopping-button').addEventListener('click', toggleCount);













 

  
  

  