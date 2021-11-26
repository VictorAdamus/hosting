let tariffPlan = document.getElementById("tariff");
let startSmooths = document.querySelectorAll(".to_plans");
for(let startSmooth of startSmooths ) {
    startSmooth.addEventListener('click', function () {
        tariffPlan.scrollIntoView({block: "center", behavior: "smooth"});});
}





let pricePrem=document.querySelector('.price_prem');
let priceEnter=document.querySelector('.price_enter');
let choices=document.querySelectorAll('.choice');
let choiceOne=document.querySelector('.choice_one');
let choiceTwo=document.querySelector('.choice_two');
for(let choice of choices){
    choice.addEventListener('click', function (e){
        if (e.target.textContent==="Yearly"){
            pricePrem.textContent="29";
            priceEnter.textContent="49";
            choiceOne.classList.add("activated");
            choiceTwo.classList.remove("activated");
        }
        if(e.target.textContent==="Monthly"){
            pricePrem.textContent=Number(pricePrem.textContent)*2;
            priceEnter.textContent=Number(priceEnter.textContent)*2;
            choiceTwo.classList.add("activated");
            choiceOne.classList.remove("activated");

        }
    })
}
let startPlan=document.getElementById("started");
let premPlan=document.getElementById("premium");
let enterPlan=document.getElementById("enterprise");
let pricePlans=document.querySelectorAll('.btn_plan');
let nameFree=document.querySelector('.name_start');
let namePrem=document.querySelector('.name_prem');
let nameEnter=document.querySelector('.name_enter');
let priceFree=document.querySelector('.price_free');
for (let pricePlan of pricePlans){
    pricePlan.addEventListener('click', function (e){
        if(e.target.id ==="start"){
            console.log('Название тарифа: '+ nameFree.textContent);
            console.log('Цена за месяц: '+ priceFree.textContent);
            console.log('Цена за год: '+ priceFree.textContent);
            document.querySelector('.starter').classList.add('btn_active');
            document.querySelector('.premium').classList.remove('btn_active');
            document.querySelector('.enterprise').classList.remove('btn_active');
            startPlan.classList.add('active_plan');
            enterPlan.classList.remove('active_plan');
            premPlan.classList.remove('active_plan');
        }
        if(e.target.id ==="prem"){
            console.log('Название тарифа: '+ namePrem.textContent);
            console.log('Цена за месяц: '+ pricePrem.textContent+'$');
            console.log('Цена за год: '+ Number(pricePrem.textContent)*12+'$');
            document.querySelector('.premium').classList.add('btn-active');
            document.querySelector('.starter').classList.remove('btn_active');
            document.querySelector('.enterprise').classList.remove('btn_active');
            premPlan.classList.add('active_plan');
            startPlan.classList.remove('active_plan');
            enterPlan.classList.remove('active_plan');
        }
        if(e.target.id ==="enter"){
            console.log('Название тарифа: '+ nameEnter.textContent);
            console.log('Цена за месяц: '+ priceEnter.textContent+'$');
            console.log('Цена за год: '+ Number(priceEnter.textContent)*12+'$');
            document.querySelector('.enterprise').classList.add('btn_active');
            document.querySelector('.premium').classList.remove('btn_active');
            document.querySelector('.starter').classList.remove('btn_active');
            enterPlan.classList.add('active_plan');
            startPlan.classList.remove('active_plan');
            premPlan.classList.remove('active_plan');
        }
    })
}








