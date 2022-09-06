//to make the clock markers
const clockBody=document.querySelector('.clock-body');

//for the hour hand
const HourMarkerCount=12;//hours
for(let count=1;count<=(HourMarkerCount/2);count++){
    const hour=document.createElement('div');
    hour.classList.add('clock-hour-markings');
    hour.style.transform=`rotate(${30*count}deg)`;
    clockBody.appendChild(hour);
}

//for the minute hand
const MinuteMarkerCount=60;//minutes
for(let count=1;count<=(MinuteMarkerCount/2);count++){
    if(count%5===0){continue}
    const minute=document.createElement('div');
    minute.classList.add('clock-minute-markings');
    minute.style.transform=`rotate(${6*count}deg)`;
    clockBody.appendChild(minute);
}

//grabbing the clock hands
const secondHand=document.querySelector('.second-hand');
const minuteHand=document.querySelector('.minute-hand');
const hourHand=document.querySelector('.hour-hand');

//get the time data
const getDate=()=>{
    const currentDate=new Date();
    return {hour:currentDate.getHours(),minute:currentDate.getMinutes(),second:currentDate.getSeconds()};
}

//clock logic
const clockFunction=(data)=>{
    secondHand.style.transform=`rotate(${-90+(6*data.second)}deg)`;
    minuteHand.style.transform=`rotate(${-90+(6*data.minute)}deg)`;
    hourHand.style.transform=`rotate(${-90+(30*data.hour)}deg)`;
};

//main function
setInterval(()=>{
    clockFunction(getDate());
},1000);