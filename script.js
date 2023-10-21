//mudando conteudo principal
function toggleSection(sectionId) {
  const sections = document.querySelectorAll('.content section');

  sections.forEach(section => {
    section.classList.add('hidden');
  });

  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.remove('hidden');
}

//icone menu select
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
  menuItem.forEach((item) =>
    item.classList.remove('ativo')
  )
  this.classList.add('ativo')
}

menuItem.forEach((item) =>
  item.addEventListener('click', selectLink)
)

//mudando cor (body, titulo), e icon
let isBlack = false;

function toggleBackgroundColor() {
  const body = document.body;
  const titulo = document.getElementById('nome-titulo');
  const rodape = document.getElementById('rodape');
  const btForm = document.getElementById('br-color');
  const rodapeLink = document.getElementById('rodape-link');
  const icon = document.getElementById('icon');

  isBlack = !isBlack;

  if (isBlack) {
    body.style.backgroundColor = "#363636";  
    titulo.style.color = "#FFFFFF";
    rodape.style.color = "#FFFFFF";
    rodapeLink.style.color = "#FFFFFF";
    icon.src = "img/lua.svg"; 
    icon.alt = "Lua Icon";
  } else {
    body.style.backgroundColor = "#FFFFFF";  
    titulo.style.color = "#363636";
    rodape.style.color = "#363636";
    rodapeLink.style.color = "#363636";
    icon.src = "img/sol.svg"; 
    icon.alt = "Sol Icon";
  }

//trocando cor tag p
const paragrafos = document.getElementsByTagName("p");

// Iterar sobre a coleção de elementos <p>
for (let i = 0; i < paragrafos.length; i++) {
  if (isBlack) {
    paragrafos[i].style.color = "#FFFFFF";  
  } else {
    paragrafos[i].style.color = "#626F7F";  
  }
}

//trocando cor bk div card
const cxCard = document.querySelectorAll(".cards");

// Iterar sobre a coleção de elementos <p>
for (let i = 0; i < cxCard.length; i++) {
  if (isBlack) {
    cxCard[i].style.backgroundColor = "#6f6f6f";  
  } else {
    cxCard[i].style.backgroundColor = "#e9e9e9";  
  }
}

}


//mudando texto do conhecimento
function changeText(newText) {
  const pElement = document.getElementById('changeable-text');
  pElement.innerText = newText;
}

function resetText() {
  const pElement = document.getElementById('changeable-text');
  pElement.innerText = '<!-- passe o mouse no card para mais informações -->';
}



let currentIndex = 0;

function updateSlider() {
  const slider = document.getElementById('slider');
  const slideWidth = document.querySelector('.slide').offsetWidth;
  const translateValue = -slideWidth * currentIndex;
  slider.style.transform = 'translateX(' + translateValue + 'px)';
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  if (currentIndex < slides.length - 3) {
    currentIndex++;
    updateSlider();
  }
}



const slider = document.querySelector('.slider');
const sliderContent = document.querySelector('.slider-content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const cardWidth = 560; // Largura de cada card
const cardsToShow = 2; // Quantidade de cartões visíveis
let position = 0; // Posição inicial

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        position += cardWidth;
    } else {
        // Loop de volta ao último conjunto de cartões
        currentIndex = 1; // Número total de cartões - 1
        position = -currentIndex * cardWidth;
    }
    sliderContent.style.transform = `translateX(${position}px)`;
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 3 - cardsToShow) { // Total de cartões - cartões visíveis
        currentIndex++;
        position -= cardWidth;
    } else {
        // Loop de volta ao primeiro conjunto de cartões
        currentIndex = 0;
        position = 0;
    }
    sliderContent.style.transform = `translateX(${position}px)`;
});