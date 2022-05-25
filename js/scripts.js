// toggle play & pause button on carousel
$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
      } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
      }
    });
  

// show or hide modals
  $("#reserveButton").click(function(){
    $('#reserveModal').modal('show'); 
  });

  $("#loginButton").click(function(){
    $('#loginModal').modal('show');
  });

});

// preview file uploaded in contact page
let loadFile = function (event) {
    let preview = document.getElementById('preview');
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
  };
  
  function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  // IF-STATMENTS, LOOPS, VARIABLES, FUNCTION, EVENT
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // REGEX VALIDATION FOR LOGIN EMAIL
  function validate() {
    let inputEmail = document.getElementById("loginEmail").value;
   
    const regEx = (/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g);  
    if (regEx.test(inputEmail)) 
      alert(`${inputEmail}: Email accepted`);
    else
      alert("That was not an email address. Please enter a valid email address.");
  }