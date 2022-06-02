//lev1_1: setTimeout setInterval============================

// const showText = () => {
//     console.log('Start Warten für 3 Sekunden');
//     setTimeout(() => {
//         console.log('Erledigt.Du hast 3 Sekunden verschwendet');
//     }, 3000);
// }
// showText();

//_______________________________

// const getTime = () => {
//     let time = new Date().toLocaleTimeString();
//     console.log(time);
// }
// getTime();

// setInterval(getTime, 1000);

//-------------------------
// let num = 11;

// const numDown = () => {

//     num--;
//     num === 0 ? clearInterval(timer)(console.log('Endlich Feierabend!')) : console.log(num);;
// }

// let timer = setInterval(numDown, 1000);



//lev1_2: setTimeout setInterval=================================

let btn = document.querySelector('#btn');
let zeit = document.querySelector('.zeit');
let count = 100;


btn.addEventListener('click', () => {
    // console.log('click');
    timer = setInterval(counter, 50);

});
let counter = () => {
    // console.log('counter');
    count--;
    zeit.innerHTML = `${count}%`;
    if (count == 0) {
        clearInterval(timer);
    }
}


//lev2_1: BOM Meldung=================================

let count1 = document.getElementById('count');
let message = document.querySelector('.message');
let meldung = document.querySelector('.meldung');

let count2 = 10;

let counter1 = () => {
    count2--;
    count1.innerHTML = `0${count2}`;
    if (count2 == 0) {

        clearInterval(timer1)
        setTimeout(() => {
            // meldung.style.transition = 'all 3s';
            message.remove();

        }, 1000);

    };

}
let timer1 = setInterval(counter1, 1000);

//lev2_4: Counter Birthday=================================

let input_date = document.getElementById('input_date');
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let day;
input_date.addEventListener('change', () => {
    console.log(input_date.value);

    setInterval(() => {
        let birthday = new Date(input_date.value);
        let date = new Date();
        let diff = birthday.getTime() - date.getTime();
        // console.log(diff);
        let day = Math.floor(diff / (1000 * 60 * 60 * 24));
        // console.log(day);
        days.innerHTML = `${day}`;

        let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // console.log(hour);
        hours.innerHTML = `${hour}`;
        let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        // console.log(minute);
        minutes.innerHTML = `${minute}`;
        let second = Math.floor((diff % (1000 * 60)) / 1000);
        // console.log(second);
        seconds.innerHTML = `${second}`;
    }, 1000);
    // console.log(birthday);
    // console.log(date);

})

//lev3_2: Countdown=================================

let output_counter = document.getElementById('output_counter');
let input_minute = document.getElementById('input_minute');
let button = document.querySelectorAll('.btn');

let sec = 60;

button.forEach(btn => {
    btn.addEventListener('click', () => {
        let min = input_minute.value - 1
            // console.log(btn.id);
        let counter = () => {
            if (btn.id == 'start') {
                sec--;
                output_counter.innerHTML = `${min}:${sec}`;
                if (sec == 0) {
                    min -= 1;
                    sec = 60;
                }

            } else if (btn.id == 'pause') {
                console.log('pause');
                clearInterval(timer);
            }
        }

        let timer = setInterval(counter, 1500);

    });
})