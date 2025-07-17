import {hostReactAppReady} from "../../common/js/usefuls.js";

(async () => {
  await hostReactAppReady();
  
  const buttons = document.querySelectorAll('.switch-container-button');
  const place1 = document.querySelector('.place1');
  const place2 = document.querySelector('.place2');

  if (buttons.length > 0) {
    buttons[0].classList.add('active');
    place1.style.display = 'flex';
    place2.style.display = 'none';
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      
      button.classList.add('active');

      if (index === 0) {
        place1.style.display = 'flex';
        place2.style.display = 'none';
      } else {
        place1.style.display = 'none';
        place2.style.display = 'flex';
      }
    });
  });
})();