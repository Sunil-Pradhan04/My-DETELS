
let slide = document.querySelector(".slide");
let bar = document.querySelector(".bar");
let cancle = document.querySelector(".cancle");
bar.addEventListener("click" , () =>{
    slide.style.display = "flex";
});
cancle.addEventListener("click" , () =>{
    slide.style.display = "none";

})

