let tarifPlans = document.getElementById("tarif");
let startSmooth = document.querySelector(".btn-started");
let startSmoothClick =function () {
    tarifPlans.scrollIntoView({block: "center", behavior: "smooth"});}
startSmooth.addEventListener('click', startSmoothClick);




let priceOne=document.querySelector('.price1');
let priceTwo=document.querySelector('.price2');
let choices=document.querySelectorAll('.choice');
let choiceOne=document.querySelector('.choice1');
let choiceTwo=document.querySelector('.choice2');
for(let choice of choices){
    choice.addEventListener('click', function (e){
        if (e.target.textContent==="Yearly"){
            priceOne.textContent="$20";
            priceTwo.textContent="$40";
            this.classList.add("activated");
            choiceTwo.classList.remove("activated");
        }
        if(e.target.textContent==="Monthly"){
            priceOne.textContent="$29";
            priceTwo.textContent="$49";
            this.classList.add("activated");
            choiceOne.classList.remove("activated");
        }
    })
}









