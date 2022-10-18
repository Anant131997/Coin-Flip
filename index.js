let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let heads = 0;
let tails = 0;
let heading = document.querySelector(".heading");
let coin = document.querySelector(".coin");
// var counter=0;

flipBtn.addEventListener("click",()=>{
  var audio = new Audio("./sounds/coin.mp3");
  audio.play();

  let randomNumber = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if(randomNumber){
    setTimeout(function(){
      coin.style.animation = "spin-heads 3s forwards";
    },100);
    heading.innerHTML = "🚩 Heads";
    heads++;
  }else{
    setTimeout(function(){
      coin.style.animation = "spin-tails 3s forwards";
    },100);
    heading.innerHTML = "Tails 🚩";
    tails++;
  }
  setTimeout(updateStats, 3000); // 1 second = 1000 miliseconds
  disableButton();
});


function updateStats(){
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disableButton(){
  flipBtn.disabled = true;
  setTimeout(function(){
    flipBtn.disabled = false;
  }, 3000);
}

resetBtn.addEventListener("click",()=>{
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
  heading.innerHTML = "Flip the Coin";
});
