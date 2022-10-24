const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const alts = {'pic1.jpg' : 'Hamster gripping bars that it is encaged in', 
'pic2.jpg' : 'Hamster voraciously devouring its food', 
'pic3.jpg' : 'Hamster unhinging it\'s jaw to eat ice cream', 
'pic4.jpg' : 'Hamster menancingly glaring back after being served spinach', 
'pic5.jpg' : 'Hamster curled up resting to hunt later'};
/* Looping through images */
for (const image of images){
    let newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener ('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alts;
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });