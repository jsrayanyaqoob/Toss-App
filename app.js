let para = document.querySelector("#result") 
let img = document.querySelector("#image")

function spinCoin(choice){

    let randomNum = Math.floor(Math.random() * 2);

    
    if(choice === 'chand' && randomNum === 0 || choice === 'masjid' && randomNum === 1){
        para.innerHTML = "jeetgya bhai toss. bat || ball"
    } else{
        para.innerHTML = "Chal Beta bowling kra"
    }


    if(randomNum === 0){
        img.src = "./assets/chand-removebg-preview.png"
    } else {
        img.src = "./assets/masjid-removebg-preview.png"
    }
}