

document.getElementsByClassName("menupress")[0].addEventListener("click", function
   (event){
    document.getElementsByClassName("nav")[0].style.display="block"
    document.getElementsByClassName("nav")[0].style.width="100%"
   }
);

document.getElementsByClassName("close")[0].addEventListener("click", function
   (event){
    document.getElementsByClassName("nav")[0].style.display="none"
    document.getElementsByClassName("nav")[0].style.width="0%"
   }
);


document.getElementById('greeting')
  .addEventListener('click', function (event) {
    console.log(event);
    greeting.innerHTML =
      "Good Morning Readers and Cat Lovers!";
  });


  document.getElementsByClassName("reaction")[0].addEventListener("click", function
   (event){
    document.getElementsByClassName("result")[0].style.display="block"
    document.getElementsByClassName("result")[0].style.width="100%"
   }
)

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    explainer.innerHTML = `<h2>Hey there!</h2> <img src="./assets/catsmirks.jpg" alt="Greeting image" width="200">`
    ;
  } else {
    explainer.innerHTML = `${event.key}`;
  }
});

document.getElementById("mouse")
  .addEventListener("mouseover", function (event) {
    console.log(event);
    box.innerHTML = `<img src="./assets/catreadbook.jpg" alt="Greeting image" width="200"> <h2>Hey! I'm Reading Here.</h2>`;
  });

/*document.getElementsByClassName("menupress")[0].addEventListener("click", function (event) {
  document.getElementsByClassName("nav")[0].style.left = "0px";
});*/




  

