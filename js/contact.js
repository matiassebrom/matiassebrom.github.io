const contactBtn = document.querySelector("#contact > h2 > span:nth-child(1)");
const networksBtn = document.querySelector("#contact > h2 > span:nth-child(1)");
const contactContainerChildren = document.querySelector(".contact-container").children;
const contactBtns = document.querySelectorAll("#contact > h2 > span");

console.log(contactBtns);
console.log(contactContainerChildren);

//ir de winndth 0 a 100
contactBtns.forEach(function (e,index ) {
    e.addEventListener("click", function (e) {
         
        if (e.target.className == "inactive" ){
            contactBtns.forEach(function (i) {
                i.classList.toggle("inactive");
            })    ;
            [...contactContainerChildren].forEach(function (i) {
               i.style.animationDelay = "0s"
               i.classList.toggle("inactive");
            })
            
      
        };
    });
});
        