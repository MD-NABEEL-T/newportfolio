var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
opentab = (event,tabname) =>{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");
openmenu = () => {
    sidemenu.style.right = "0";
}
closemenu = () => {
    sidemenu.style.right = "-200px";
}
let form=document.querySelector("form");
let msg=document.querySelector("#msg");
let button =document.querySelector("button");
button.addEventListener("click", () => {
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.innerText = "Submitted";
    msg.innerText="Thanks for the feedback";
    form.reset();
});

