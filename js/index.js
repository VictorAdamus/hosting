let tarifPlans = document.getElementById("tarif");
let startSmooth = document.querySelector(".btn-started");
let startSmoothClick =function () {
    tarifPlans.scrollIntoView({block: "center", behavior: "smooth"});}
startSmooth.addEventListener('click', startSmoothClick);










