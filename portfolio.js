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
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwV0kzBdoZU8OpiTB2dvtZTriHvuIYIyK5LIZ9Ox43ZsJi_RTlRc_QKXo_Q2i0IkAFeGQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });


let moreProjects = document.querySelector(".moreProjects");
let seeMore = document.querySelector(".see-more");
seeMore.addEventListener("click", () => {
    seeMore.style.display = "none";
    // moreProjects.setAttribute("class", "work-list");
    moreProjects.style.display = "grid";
    moreProjects.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    moreProjects.style.gap = "40px";
});
let msg=document.querySelector("#msg");
let button =document.querySelector("button");
button.addEventListener("click", () => {
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.innerText = "Submitted";
    msg.innerText="Thanks for the feedback";
});

