let count = 0;
let images = document.querySelector(".secao_swipper");
let carrosel = document.querySelectorAll(".carrosel .container_swipper");



const swipper = () => {
    count++;
    for(let i = 0; i > count; i++) {
        count += [i];

        if(count[i] > carrosel.length - 1) {
            count = 0;
        }
    }
    

    // images.style.transform = `translateX(${-count * 390}px)`;
}

setInterval(swipper, 1800);


 