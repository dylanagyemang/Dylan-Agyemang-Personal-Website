const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
/*function () {
    var nav = document.getElementById("subnav");
    nav.classList.toggle("tcolor");
  }*/


const sectionElements = document.querySelectorAll('sect');
sectionElements.forEach((el) => observer.observe(el));

var section = document.getElementsByClassName("sect");
var nav = document.getElementsByClassName("nav-link");
console.log(nav.value)

if (section.hasAttribute("show")){
    //if nav.innerHTML == 

}