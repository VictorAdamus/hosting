let tarifPlans = document.getElementById("tarif");
let startSmooths = document.querySelectorAll(".to-plans");
for(let startSmooth of startSmooths ) {
    startSmooth.addEventListener('click', function () {
        tarifPlans.scrollIntoView({block: "center", behavior: "smooth"});});
}





let pricePrem=document.querySelector('.price-prem');
let priceEnter=document.querySelector('.price-enter');
let choices=document.querySelectorAll('.choice');
let choiceOne=document.querySelector('.choice1');
let choiceTwo=document.querySelector('.choice2');
for(let choice of choices){
    choice.addEventListener('click', function (e){
        if (e.target.textContent==="Yearly"){
            pricePrem.textContent="29";
            priceEnter.textContent="49";
            this.classList.add("activated");
            choiceTwo.classList.remove("activated");
        }
        if(e.target.textContent==="Monthly"){
            pricePrem.textContent=Number(pricePrem.textContent)*2;
            priceEnter.textContent=Number(priceEnter.textContent)*2;
            this.classList.add("activated");
            choiceOne.classList.remove("activated");

        }
    })
}
let startPlan=document.getElementById("started");
let premPlan=document.getElementById("premium");
let enterPlan=document.getElementById("enterprise");
let pricePlans=document.querySelectorAll('.btn-plan');
let nameFree=document.querySelector('.name-start');
let namePrem=document.querySelector('.name-prem');
let nameEnter=document.querySelector('.name-enter');
let priceFree=document.querySelector('.price-free');
for (let pricePlan of pricePlans){
    pricePlan.addEventListener('click', function (e){
        if(e.target.id ==="Start"){
            console.log('Название тарифа: '+ nameFree.textContent);
            console.log('Цена за месяц: '+ priceFree.textContent);
            console.log('Цена за год: '+ priceFree.textContent);
            this.classList.add('btn-active');
            document.querySelector('.Premium').classList.remove('btn-active');
            document.querySelector('.Enterprise').classList.remove('btn-active');
            startPlan.classList.add('active-plan');
            enterPlan.classList.remove('active-plan');
            premPlan.classList.remove('active-plan');
        }
        if(e.target.id ==="Prem"){
            console.log('Название тарифа: '+ namePrem.textContent);
            console.log('Цена за месяц: '+ pricePrem.textContent+'$');
            console.log('Цена за год: '+ Number(pricePrem.textContent)*12+'$');
            this.classList.add('btn-active');
            document.querySelector('.Starter').classList.remove('btn-active');
            document.querySelector('.Enterprise').classList.remove('btn-active');
            premPlan.classList.add('active-plan');
            startPlan.classList.remove('active-plan');
            enterPlan.classList.remove('active-plan');
        }
        if(e.target.id ==="Enter"){
            console.log('Название тарифа: '+ nameEnter.textContent);
            console.log('Цена за месяц: '+ priceEnter.textContent+'$');
            console.log('Цена за год: '+ Number(priceEnter.textContent)*12+'$');
            this.classList.add('btn-active');
            document.querySelector('.Premium').classList.remove('btn-active');
            document.querySelector('.Starter').classList.remove('btn-active');
            enterPlan.classList.add('active-plan');
            startPlan.classList.remove('active-plan');
            premPlan.classList.remove('active-plan');
        }
    })
}








