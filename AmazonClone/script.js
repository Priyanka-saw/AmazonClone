const imgs = document.querySelectorAll(".header-slider ul img");
const prevbtn = document.querySelector(".control-prev");
const nextbtn = document.querySelector(".control-next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }

  imgs[n].style.display = "block";
}
changeSlide();

prevbtn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});
nextbtn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

//note : 
//The deltaY property returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0.

// function myFunction(event) {
//   var y = event.deltaY;
// }


const scrollContainer = document.querySelectorAll(".product");
for(const item of scrollContainer){
    item.addEventListener("wheel", (evt) =>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}