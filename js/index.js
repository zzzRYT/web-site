function day_night() {
    if(document.querySelector('#night_day').value === 'night'){
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        document.querySelector('#night_day').value = 'day';
        document.getElementById('main').contentWindow.document.querySelector('body').style.color = 'white';
      } else {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        document.querySelector('#night_day').value = 'night';
        document.getElementById('main').contentWindow.document.querySelector('body').style.color = 'black';
      }
}

// const dayBotton = document.getElementById('night_day');
// dayBotton.addEventListener('click', m1_day_night);

// function m1_day_night() {
//   document.querySelector('iframe').contentWindow.document('body').style.color = 'white';
// }