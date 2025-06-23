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

function changeImageInNavs(){
    if(imgFeatures.src.includes("images/icon-arrow-down.svg")){
        imgFeatures.src = "images/icon-arrow-up.svg";
    }else{
        imgFeatures.src = "images/icon-arrow-down.svg"
    }
}

features.addEventListener("click", (e) =>{
    e.preventDefault();
            changeImageInNavs();
        todo.classList.toggle("hidden");

})
company.addEventListener("click", (e) =>{   
    e.preventDefault();
     changeImageInNavs();
        history.classList.toggle("hidden");
})
careers.addEventListener("click", (e) =>{
    e.preventDefault();
     changeImageInNavs();
        one.classList.toggle("hidden");
})
about.addEventListener("click", (e) =>{
    e.preventDefault();
    changeImageInNavs();
        two.classList.toggle("hidden");
})