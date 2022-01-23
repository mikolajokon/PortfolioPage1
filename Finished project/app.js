function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Pokaż więcej"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Pokaż mniej"; 
      moreText.style.display = "inline";
    }
  }
  function Email.send({
    SecureToken : "8CF253953211415523AA8C2C6499DD105887",
    To : 'zokoniami@gmail.com',
    From : "mikiokon1@gmail.com",
    Subject : "",
    Body : " "
}).then(
  message => alert(message)
);