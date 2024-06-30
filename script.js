let mod = document.querySelector(".mod");
let currmod = "light";
mod.addEventListener("click",() =>{
  if(currmod ==="Light"){
currmod = "dark";
document.querySelector("body").style.backgroundColor = "#ea4796";
  }
  else{
    currmod ="light";
    document.querySelector("body").style.backgroundColor = "#ea4796";
  }
  console.log(currmod);
});
