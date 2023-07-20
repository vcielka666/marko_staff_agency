 //PHONE NUMBER INPUT FORMATING
 document.addEventListener('DOMContentLoaded', function() {
  // Select the phone input element
  const phoneInput = document.getElementById('phoneInput');

  // Add an event listener for input changes
  phoneInput.addEventListener('input', function() {
    // Remove all non-digit characters from the input value using regular expression
    const formattedNumber = phoneInput.value.replace(/\D/g, '');

    // Format the phone number with spaces
    let formattedString = '';
    for (let i = 0; i < formattedNumber.length; i++) {
      if (i === 3 || i === 6 || i === 9) {
        formattedString += ' ';
      }
      formattedString += formattedNumber[i];
    }

    // Set the formatted value back to the input field
    phoneInput.value = formattedString;
  });
});

 
 
 
 
 
 // // SUBMIT FORM AJAX FUNCTION..TO STAY ON THE PAGE


var show;
var odoslat_button;
var formular;

  document.addEventListener('DOMContentLoaded', function() {
    show = document.querySelector('.alert');
    odoslat_button = document.querySelector('#submit_button');
    formular = document.querySelector('.modal');
    // Rest of your code using the 'show' variable...
});


  var isCooldown = false; // Flag to check if the form is on cooldown
  var cooldownTime = 30; // Cooldown time in seconds

  function startCooldown() {
    isCooldown = true;
    var counter = cooldownTime;

    var interval = setInterval(function () {
      show.textContent = "ZASLAT DALŠÍ FORMULÁŘ MOŽNY ZA " + counter + " VTEŘIN ";
      odoslat_button.style.opacity = '0.3';
      counter--;
      formular.style.display = 'none';

      if (counter < 0) {
        clearInterval(interval);
        isCooldown = false;
        show.textContent = ""; // Clear the alert message
        show.style.display = 'none';
        odoslat_button.style.opacity = '1';
        formular.style.display = 'flex';
      }
    }, 1000);
  }

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
    if (isCooldown) {
      // Form is on cooldown, don't submit again
      return;
    }

    console.log("Form submission started...");
    show.style.display = 'flex';

    var form = document.getElementById("myForm");
    var formData = new FormData(form);

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the AJAX request
    xhr.open("POST", "submit_form.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Form submission successful, show the alert message and start cooldown
          show.textContent = "FORMULÁŘ BYL ÚSPĚŠNĚ ODESLÁN!";
          setTimeout(startCooldown, 2400); 
        } else {
          // Form submission failed, show the error message
          show.textContent = "CHYBA PŘI ODESLÁNI FORMULÁŘE!";
        }
      }
    };

    // Send the form data using AJAX
    xhr.send(formData);
  }

  
window.onload = function() {

   //SHOW/HIDE - TOGGLE POSITIONS  
const buttonPositions = document.querySelector('.ake_pozicie');
const positions = document.querySelector('.container_positions');
const searchButton = document.querySelector('.search_button');
const jobpositions = document.querySelectorAll('.job_position');

let isDisplayed = false;

buttonPositions.addEventListener('click', function() {
  if (!isDisplayed) {
    jobpositions.forEach(function(jobposition) {
      jobposition.style.visibility = 'visible';
      
      });
    positions.style.display = 'block';
    positions.style.minHeight = positions.scrollHeight + 'px';
    positions.style.transition = 'min-height 400ms ease-out';
    
    kontakty.style.display = 'none';
    buttonPositions.style.transform = 'scale(0.95)';
    buttonPositions.style.backgroundColor = 'rgb(200, 236, 243)';
  } else {
    positions.style.minHeight = '0px';
    jobpositions.forEach(function(jobposition) {
      jobposition.style.visibility = 'hidden';
    });
    kontakty.style.display = 'flex';
    buttonPositions.style.transform = 'scale(1)';
    buttonPositions.style.backgroundColor = 'rgb(219, 236, 243)';
  }

  isDisplayed = !isDisplayed;
});

    
    searchButton.addEventListener('click', function() {
        if (!isDisplayed) {
          jobpositions.forEach(function(jobposition) {
            jobposition.style.visibility = 'visible';
            
            });
          positions.style.display = 'block';
          positions.style.minHeight = positions.scrollHeight + 'px';
          positions.style.transition = 'min-height 400ms ease-out';
          
          kontakty.style.display = 'none';
          buttonPositions.style.transform = 'scale(0.95)';
          buttonPositions.style.backgroundColor = 'rgb(200, 236, 243)';
        } else {
          positions.style.display = 'none';
          kontakty.style.display = 'flex';

          buttonPositions.style.transform = 'scale(1)';
          buttonPositions.style.backgroundColor = 'rgb(219, 236, 243)';
        }
        
        isDisplayed = !isDisplayed;
      }); 
    
//MODAL FORM
const modalbgr = document.querySelector('.position_details_container');
const modalDetailsPositions = document.querySelector('.modal_details_positions');
const modal_background = document.querySelector('.modal_form_background');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close_modal');
const showForm = document.querySelector('.form_button');
const mainContainer = document.querySelector('.container_main');
const kontakty = document.querySelector('.kontakt');

function showModal() {
  mainContainer.style.display = "none";
  modal_background.style.display = "block";
  modalbgr.style.display = 'none';
  modalDetailsPositions.style.display = 'none';
  kontakty.style.display = 'none';
 

  isDisplayed = !isDisplayed;
}




function hideModal() {
    mainContainer.style.display = 'flex';
    modal_background.style.display = 'none';
    modalbgr.style.display = 'block';
    kontakty.style.display = 'flex';
    positions.style.display = 'none';
    buttonPositions.style.transform = 'scale(1)';
    buttonPositions.style.backgroundColor = 'rgb(219, 236, 243)';
    isDisplayed = false;
}

showForm.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);

// MODAL DETAILS OF POSITIONS 
    const positionDetails = document.getElementsByClassName('job_position');
Array.from(positionDetails).forEach(function(position) {
  position.addEventListener('click', function() {
    modalDetailsPositions.style.display = 'block';
    modalbgr.style.display = 'block';
    event.stopPropagation();
  });
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
  if (!modalDetailsPositions.contains(targetElement)) {
    modalDetailsPositions.style.display = 'none';
    modalbgr.style.display = 'none';
  }
});

// WORK REQUEST BUTTON
const zadostButton = document.getElementsByClassName('zadost');
Array.from(zadostButton).forEach(function(button) {
  button.addEventListener('click', showModal);
  
});



// ARROW POINTING ON SPECIFIC OPTION IN POSITION OPTIONS
const jobPositions = document.querySelectorAll('.job_position');

jobPositions.forEach(function(position) {
  const arrow = position.querySelector('.arrow');
  const anchor = position.querySelector('a');

  anchor.addEventListener('click', function() {
    arrow.style.display = 'block';
    arrow.classList.remove('fly-in');
    void arrow.offsetWidth; // Trigger reflow to restart the animation
    arrow.classList.add('fly-in');

    jobPositions.forEach(function(otherPosition) {
      if (otherPosition !== position) {
        otherPosition.querySelector('.arrow').style.display = 'none';
        otherPosition.querySelector('.arrow').classList.remove('fly-in');
       
      }
    });
  });

  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (!position.contains(targetElement)) {
      arrow.style.display = 'none';
      arrow.classList.remove('fly-in');
      arrow.style.transform = 'translateX(0%)';
    }
  });
});


// LANGUAGE OPTIONALITY
const languageDivs = document.querySelectorAll('.language > div');
let previousDiv = null;

languageDivs.forEach((div) => {
  const languageLink = div.querySelector('a');

  div.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    
    if (previousDiv !== null) {
      previousDiv.querySelector('img').style.transform = 'scale(1)';
    }
    
    if (previousDiv === div) {
      previousDiv = null;
    } else {
      const languageCode = languageLink.getAttribute('data-lang');
      div.querySelector('img').style.transform = 'scale(1.4)';
      previousDiv = div;
    }
    
    console.log(`Clicked on ${div.querySelector('p').textContent}`);
  });
});


// Lock the screen orientation to portrait
window.addEventListener("orientationchange", function() {
  if (window.orientation !== 0) {
    // Force the orientation back to portrait
    window.orientation = 0;
  }
});


}
