const slides = document.querySelectorAll('.slideshow__slides');
const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

i = 0;

function ActiveSlide(n) {
  for(slide of slides) {
    slide.classList.remove('active');
    slides[n].classList.add('active');
  }
} 

// function for prev btn
prev.addEventListener('click', function() {
  if(i == slides.length - 1) {
    i = 0;
    ActiveSlide(i);
  }
  else {
    i++;
    ActiveSlide(i);
  }
});

// function for prev btn
// next.addEventListener('click', function() {
//   if(i == 0) {
//     i = slides.length - 1;
//     ActiveSlide(i);
//   }
//   else {
//     i--;
//     ActiveSlide(i);
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function() {
      const content = item.querySelector('.accordion-content');
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
});


