const hr = document.querySelector('.hour');
const mn = document.querySelector('.minute');
const sc = document.querySelector('.second');

const changeTime  = () => {
    const currDate = new Date();
    const currHour = currDate.getHours();
    const currMinutes = currDate.getMinutes();
    const currSeconds = currDate.getSeconds();

    const hourRotation = (30 * currHour) + (0.5 * currMinutes) + (1/120 * currSeconds);
    const minuteRotation = (6 * currMinutes) + (0.1 * currSeconds);
    const secondRotation = (6 * currSeconds);
    setRotation(hr,hourRotation);
    setRotation(mn,minuteRotation);
    setRotation(sc,secondRotation);
    setTimeout(changeTime,1000);
}
function setRotation(hand,rotation){
    hand.style.transform = `rotate(${rotation}deg)`;
}

changeTime();
