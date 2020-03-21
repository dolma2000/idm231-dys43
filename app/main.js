const star = document.getElementById('star')
const moon = document.getElementById('moon')
const emperor = document.getElementById('emperor')
const hierophant = document.getElementById('hierophant')
const lovers = document.getElementById('lovers')
const chariot = document.getElementById('chariot')
const hermit = document.getElementById('hermit')
const justice = document.getElementById('justice')
const death = document.getElementById('death')
const strength = document.getElementById('strength')
const temperance = document.getElementById('temperance')
const devil = document.getElementById('devil')
const bigbox = document.getElementById ('bigbox')

const submit = document.getElementById('submit')
const birthdayForm = document.getElementById('birthdayForm');

var box = document.getElementById ('bigbox')
box.getElementsByClassName('zodiac')[0].hidden = true
box.getElementsByClassName('smallbox')[0].hidden = false
box.getElementsByClassName('overlay')[0].hidden = true



function smallbig (classname) {
    box.style.width = '5.41%';
    box.getElementsByClassName('zodiac')[0].hidden = false;
    box.getElementsByClassName('smallbox')[0].hidden = true;
    box.getElementsByClassName('overlay')[0].hidden = false;
    box = classname;
    box.style.width = '35.08%';
    box.getElementsByClassName('zodiac')[0].hidden = true;
    box.getElementsByClassName('smallbox')[0].hidden =false;
    box.getElementsByClassName('overlay')[0].hidden = true;

    const sound = box.dataset.sound;
    const speakers = document.getElementById('speakers')
    speakers.src=`sounds/${sound}.mp3`;
    speakers.play();
}


const handleBirthdayForm = event => {
    
    event.preventDefault();

  const birthdayInput = document.getElementById('birthday');
  const birthdayValue = birthdayInput.value;
  
  let month, day;

  console.log('birthdayValue:', birthdayValue);

  if (birthdayValue.includes('/')) {
    const dateArray = birthdayValue.split('/');
    month = dateArray[0];
    day = dateArray[1];
  } else {
    const birthday = new Date(`${birthdayValue}T00:00`);
    month = birthday.getMonth() + 1;
    day = birthday.getDate();
  }

  console.log('month: ', month);
  console.log('day: ', day);


    if ((month == 1 && day>=20) || (month == 2 && day<=18)) {
        smallbig(star);
    } else if ((month == 2 && day>=19) || (month == 3 && day<=20)) {
        smallbig(moon);
    } else if ((month == 3 && day>=21) || (month == 4 && day<=19)) {
        smallbig(emperor);
    } else if ((month == 4 && day>=20) || (month == 5 && day<=20)) {
        smallbig(hierophant);
    } else if ((month == 5 && day>=21) || (month == 6 && day<=20)) {
        smallbig(lovers);
    } else if ((month == 6 && day>=21) || (month == 7 && day<=22)) {
        smallbig(chariot);
    } else if ((month == 7 && day>=23) || (month == 8 && day<=22)) {
        smallbig(strenght);
    } else if ((month == 8 && day>=23) || (month == 9 && day<=22)) {
        smallbig(hermit);
    } else if ((month == 9 && day>=23) || (month == 10 && day<=22)) {
        smallbig(justice);
    } else if ((month == 10 && day>=23) || (month == 11 && day<=21)) {
        smallbig(death);
    } else if ((month == 11 && day>=22) || (month == 12 && day<=21)) {
        smallbig(temperance);
    } else if ((month == 12 && day>=22) || (month == 1 && day<=19)) {
        smallbig(devil);
}

};

birthdayForm.addEventListener('submit', handleBirthdayForm);





const soundButtons = document.querySelectorAll('.soundtrack');
const speakers = document.getElementById('speakers')

soundButtons.forEach(button => {
    const sound = button.dataset.sound;
    button.addEventListener('click', () => {
        speakers.src=`sounds/${sound}.mp3`;
        speakers.play();
    })    
})





const btnModalOpen = document.getElementById('btn-modal-open');
const btnModalClose = document.getElementById('btn-modal-close');

const openModal = () => {
  modal.hidden = false;
};

const closeModal = () => {
  modal.hidden = true;
};

btnModalOpen.addEventListener('click', openModal, false);
btnModalClose.addEventListener('click', closeModal, false);


star.addEventListener('click', function() {smallbig(star)});
moon.addEventListener('click', function() {smallbig(moon)});
emperor.addEventListener('click', function() {smallbig(emperor)});
hierophant.addEventListener('click', function() {smallbig(hierophant)});
lovers.addEventListener('click', function() {smallbig(lovers)});
chariot.addEventListener('click', function() {smallbig(chariot)});
hermit.addEventListener('click', function() {smallbig(hermit)});
justice.addEventListener('click', function() {smallbig(justice)});
death.addEventListener('click', function() {smallbig(death)});
strength.addEventListener('click', function() {smallbig(strength)});
temperance.addEventListener('click', function() {smallbig(temperance)});
devil.addEventListener('click', function() {smallbig(devil)});
bigbox.addEventListener('click', function() {smallbig(bigbox)});