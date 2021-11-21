let tarifPlans = document.getElementById("tarif");
let startSmooths = document.querySelectorAll(".btn-started");
for(let startSmooth of startSmooths ) {
    startSmooth.addEventListener('click', function () {
        tarifPlans.scrollIntoView({block: "center", behavior: "smooth"});});
}





let priceOne=document.querySelector('.price1');
let priceTwo=document.querySelector('.price2');
let choices=document.querySelectorAll('.choice');
let choiceOne=document.querySelector('.choice1');
let choiceTwo=document.querySelector('.choice2');
for(let choice of choices){
    choice.addEventListener('click', function (e){
        if (e.target.textContent==="Yearly"){
            priceOne.textContent="29";
            priceTwo.textContent="49";
            this.classList.add("activated");
            choiceTwo.classList.remove("activated");
        }
        if(e.target.textContent==="Monthly"){
            priceOne.textContent=Number(priceOne.textContent)*2;
            priceTwo.textContent=Number(priceTwo.textContent)*2;
            this.classList.add("activated");
            choiceOne.classList.remove("activated");

        }
    })
}
let pricePlans=document.querySelectorAll('.btn-plan');
let nameFree=document.querySelector('.name-start');
let namePrem=document.querySelector('.name-prem');
let nameEnter=document.querySelector('.name-enter');
let priceFree=document.querySelector('.price-free');
for (let pricePlan of pricePlans){
    pricePlan.addEventListener('click', function (e){
        if(e.target.className ==="btn-plan Starter"){
            console.log('Название тарифа: '+ nameFree.textContent);
            console.log('Цена за месяц: '+ priceFree.textContent);
            console.log('Цена за год: '+ priceFree.textContent);
        }
        if(e.target.className ==="btn-plan Premium"){
            console.log('Название тарифа: '+ namePrem.textContent);
            console.log('Цена за месяц: '+ priceOne.textContent+'$');
            console.log('Цена за год: '+ Number(priceOne.textContent)*12+'$');
        }
        if(e.target.className ==="btn-plan Enterprise"){
            console.log('Название тарифа: '+ nameEnter.textContent);
            console.log('Цена за месяц: '+ priceTwo.textContent+'$');
            console.log('Цена за год: '+ Number(priceTwo.textContent)*12+'$');
        }
    })
}









