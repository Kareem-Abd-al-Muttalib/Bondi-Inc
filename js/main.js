/* Header */
let navbarForm = document.querySelector(".navbar form");
let searchInp = document.querySelector(".navbar form  input");
let searchA = document.querySelector(".search-a");

document.addEventListener("DOMContentLoaded", function () {
    changeWidth();
})

searchA.addEventListener("click", (e) => {
    e.preventDefault();
    changeWidth();
    searchInp.focus();
})

let changeWidth = ()  => {
    if (searchInp.classList.contains("w-100")) {
        searchInp.classList.remove("w-100")
        searchA.style.animation = "searchSVG 1.75s infinite both";
    } else {
        searchInp.classList.add("w-100")
        searchA.style.animation = "";
    }
}
/* our work */
let lis = document.querySelectorAll(".categories li");
let lisArr = Array.from(lis);
let boxes = document.querySelectorAll(".box");
let boxesArr = Array.from(boxes);

lisArr.forEach((li) => {
    li.addEventListener("click", (i)=>{
        lisArr.forEach((li)=>{
            li.classList.remove(...["active", "btn-main", "rounded-pill"]);
            i.currentTarget.classList.add(...["active", "btn-main", "rounded-pill"]);
            // i.currentTarget.classList = "active btn-main rounded-pill";
        })
            if (i.currentTarget.dataset.cat === "all") {
                boxesArr.forEach((box)=>{
                    box.style.display = "inline"
                })
            } else {
                boxesArr.forEach((box)=>{
                    box.style.display = "none";
                    document.querySelectorAll(i.currentTarget.dataset.cat).forEach((box)=>{
                        box.style.display = "inline"
                    })
            })
        }
    })
})

/* footer */
/* compyright */
let d = new Date();
document.getElementById('year').innerHTML = d.getFullYear();
