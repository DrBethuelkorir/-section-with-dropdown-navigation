const features = document.getElementById("Features");
const company = document.getElementById("Company");
const careers = document.getElementById("Careers");
const about = document.getElementById("About");

const todo = document.querySelector(".todo-list");
const history = document.querySelector(".history");
const one = document.querySelector(".careers")
const two = document.querySelector(".about")



const imgFeatures = document.getElementById("img-features");
const imgcompany = document.getElementById("img-Company");
const imgcareers = document.getElementById("img-careers");
const imgabout = document.getElementById("img-about");


features.addEventListener("click", (e) =>{
    e.preventDefault();
    if(imgFeatures.src.includes("images/icon-arrow-down.svg")){
        imgFeatures.src = "images/icon-arrow-up.svg";
    }else{
        imgFeatures.src = "images/icon-arrow-down.svg"
    }
        todo.classList.toggle("hidden");

})
company.addEventListener("click", (e) =>{   
    e.preventDefault();
    if(imgcompany.src.includes("images/icon-arrow-down.svg")){
         imgcompany.src = "images/icon-arrow-up.svg";
    }else{
        imgcompany.src = "images/icon-arrow-down.svg"
    }
        history.classList.toggle("hidden");
})
careers.addEventListener("click", (e) =>{
    e.preventDefault();
     if(imgcareers.src.includes("images/icon-arrow-down.svg")){
         imgcareers.src = "images/icon-arrow-up.svg";
    }else{
        imgcareers.src = "images/icon-arrow-down.svg"
    }
        one.classList.toggle("hidden");
})
about.addEventListener("click", (e) =>{
    e.preventDefault();
     if(imgabout.src.includes("images/icon-arrow-down.svg")){
         imgabout.src = "images/icon-arrow-up.svg";
    }else{
        imgabout.src = "images/icon-arrow-down.svg"
    }
        two.classList.toggle("hidden");
})