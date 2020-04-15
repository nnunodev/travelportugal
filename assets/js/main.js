//loading carousel and settings

$('.owl-carousel').owlCarousel({
  stagePadding: 60,
  loop:true,
  margin:50,
  nav:true,
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


//Function To Display Popup
function div_show() {
    document.getElementById('contact-container').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('contact-container').style.display = "none";
}

function sendEmail(contactForm) {
    emailjs.send('gmail', 'travel_portugal', {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "information_feedback": contactForm.FormControlText.value
        })
        .then(
            function (response) {

                
                alert("Thank you for your message.");
                div_hide();
            },
            function (error) {
                
                alert("Please try again.");
            }
        );
    return false;
}