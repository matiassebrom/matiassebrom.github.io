const contactBtn = document.querySelector("#contact > h2 > span:nth-child(1)");
const networksBtn = document.querySelector("#contact > h2 > span:nth-child(1)");
const contactContainerChildren = document.querySelector(".contact-container").children;
const contactBtns = document.querySelectorAll("#contact > h2 > span");

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
        
const $form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit (event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        //aca se puede hacer lo que hay que hace
        alert("enviado")
    }
}