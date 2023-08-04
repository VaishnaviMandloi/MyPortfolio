const menuIcon = document.querySelector("#menuIcon")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const moon = document.querySelector("#moon")

menuIcon.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    menuIcon1.classList.toggle("rotate-[45deg]")
    menuIcon1.classList.toggle("top-1.5")
    menuIcon2.classList.toggle("hidden")
    menuIcon3.classList.toggle("-rotate-[45deg]")
})

moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})

  var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        window.location.href = './index.html';
      alert('Thanks !! For contacting us , we will mail you shortly.')
    });
  });
