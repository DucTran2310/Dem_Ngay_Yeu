const dateLove = new Date('2018-02-14T00:00:00');
// Sun Dec 17 1995 03:24:00 GMT...

music = ['ido', 'noinaycoanh', 'nguoiamphu'];

document.addEventListener('DOMContentLoaded', function() {
    var rootTime = document.querySelector('.times');

    // show day begins 
    document.querySelector(".infor__date").textContent = `${(dateLove.getDate()>9) ? dateLove.getDate() : "0" + dateLove.getDate()}-${(dateLove.getMonth()>8) ? (dateLove.getMonth()+1): "0" + (dateLove.getMonth()+1)}-${dateLove.getFullYear()}`;
    // calc days love (date quy ra miliseconds)
    const sum = Math.floor((new Date() - dateLove) / 1000 / 60 / 60 / 24);
    console.log(sum);

    document.querySelector(".date").textContent = sum + " DAYS";

    // show times
    function showTime() {
        const currentDay = new Date();
        hrs = (Math.floor(Math.floor((currentDay - dateLove) / 1000) / 60 / 60)) % 24,
            min = (Math.floor(Math.floor((currentDay - dateLove) / 1000) / 60)) % 60,
            sec = Math.floor((currentDay - dateLove) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    };

    showTime();

    // loop every second   
    setInterval(showTime, 1000);

    document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

    // Thêm vào sau những phần tử cuối 
    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );
})