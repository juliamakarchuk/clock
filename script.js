let hoursContainer = document.querySelector('.js-hours');
let minutesContainer = document.querySelector('.js-minutes');
let secondsContainer = document.querySelector('.js-seconds');
let startBtn = document.querySelector('.js-start');
let stopBtn = document.querySelector('.js-stop');
let resetBtn = document.querySelector('.js-reset');

class Timer{
    constructor(){
       this.timerId = null;
       this.isActive = false;
       this.valueTime = null;
    }


    start(){
        if(!this.isActive){
            this.isActive=true;
            this.timerId= setInterval(()=>{
                this.valueTime+=1000;
                let seconds = Math.floor(this.valueTime/1000);
                let minutes = Math.floor(seconds/60);
                let hours = Math.floor(minutes/60);
                seconds= seconds%60;
                minutes= minutes%60;
                hours= hours%24;
                hoursContainer.textContent = (hours<10) ? '0'+ hours : hours;
                minutesContainer.textContent = (minutes<10) ? '0'+ minutes : minutes;
                secondsContainer.textContent = (seconds<10) ? '0' + seconds : seconds;
            }, 1000)
        }
    }
    stop(){
        if(this.isActive){
            this.isActive=false;
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    reset(){
        clearInterval(this.timerId);
        this.timerId = null;
        this.valueTime = null;
        hoursContainer.textContent = `00`;
        minutesContainer.textContent = `00`;
        secondsContainer.textContent = `00`;
    }
}
const timer = new Timer();
startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));
resetBtn.addEventListener('click', timer.reset.bind(timer));