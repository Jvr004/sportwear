const imgCarr = document.getElementById("imgCarrousel");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

var indice = 0;

const imgs = [
  `../img/img-carousel/camiseta-seleccion.png"`,
  `../img/img-carousel/banner-zapatillas.png"`,
  `../img/img-carousel/pantalones-banner.png"`
];


function recorridoLeft(){
  if (indice === 0) {
    indice = imgs.length -1;
  } else {
    indice--;
  }
  
  imgCarr.src = imgs[indice];

}

function recorridoRight(){
  if (indice === imgs.length - 1) {
    indice = 0;
  } else {
    indice++;
  }
  imgCarr.src = imgs[indice];
}

btnLeft.addEventListener("click", recorridoLeft);
btnRight.addEventListener("click", recorridoRight);