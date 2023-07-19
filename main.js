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