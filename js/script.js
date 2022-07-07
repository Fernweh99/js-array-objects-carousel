/*
# Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
*/


// # Function

const createImageCarousel = (image, i, boolean) => {
  let itemsCarousel = "";

  if (boolean) {
    itemsCarousel = `
    <div class="carousel-image">
    <img src="${image.url}" alt="image-${i}">
    <h3 class="title-image">${image.title}</h3>
    <p class="description-image">${image.description}</p>
    </div>`
    
  } else {
    itemsCarousel = `
    <img src="${image.url}" alt="image-${i}">`
  }

  return itemsCarousel;
}

const images = [
  {
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    title: 'Svezia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },

  {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Perù',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },

  {
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
    title: 'Chile',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
  {
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Argentina',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
  {
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
    title: 'Colombia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
];

// # Creazione dei file da inserire nel DOM

const carouselMain = document.getElementById('carousel-main'); 
const carouselIndex = document.getElementById('carousel-index');
// mi preparo per stampare le immagini principali del carousel
let itemsCarouselMain = "";

images.forEach((image, i) => {

  itemsCarouselMain += createImageCarousel(image, i, true);

})
carouselMain.innerHTML = itemsCarouselMain;

//mi preparo per stampare le immagini index del carousel
let itemsCarouselIndex = "";

images.forEach((image, i) => {

  itemsCarouselIndex += createImageCarousel(image, i, false);

})
carouselIndex.innerHTML = itemsCarouselIndex;

// # Partenza carousel e gestione del medesiomo con i bottoni 

//recupero gli elementi per aggiungervi la classe active
const imageMain = document.querySelectorAll('.carousel-image');
const imageIndex = document.querySelectorAll('#carousel-index img')

let currentI = 0;

imageMain[currentI].classList.add('active');
imageIndex[currentI].classList.add('active');

// recupero i bottoni
const btnRight = document.getElementById('right-btn');
const btnLeft = document.getElementById('left-btn');

// Aggiungo l'evento ai bottoni
btnRight.addEventListener("click", ()=>{
  imageMain[currentI].classList.remove('active');
  imageIndex[currentI].classList.remove('active');

  currentI++

  if (currentI == images.length) {
    currentI = 0;
  }

  imageMain[currentI].classList.add('active');
  imageIndex[currentI].classList.add('active');

})

btnLeft.addEventListener("click", ()=>{
  imageMain[currentI].classList.remove('active');
  imageIndex[currentI].classList.remove('active');

  currentI--

  if (currentI < 0) {
    currentI = images.length - 1;
  }

  imageMain[currentI].classList.add('active');
  imageIndex[currentI].classList.add('active');

})