
let gallery = document.querySelector('.gallery-slider');
let scrollAmount = 0;

function autoScrollGallery() {
  scrollAmount += 320;
  if (scrollAmount >= gallery.scrollWidth) scrollAmount = 0;
  gallery.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
}
setInterval(autoScrollGallery, 3000);
