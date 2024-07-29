
const your_date = document.querySelector('#date')

const clock = document.querySelector('#clock')

setInterval(()=>{
    let date = new Date();
    your_date.innerHTML=date.toLocaleDateString();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)



