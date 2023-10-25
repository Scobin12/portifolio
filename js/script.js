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
  const rodapeLink = document.getElementById('rodape-link');
  const icon = document.getElementById('icon');

  isBlack = !isBlack;

  if (isBlack) {
    body.style.backgroundColor = "#363636";  
    titulo.style.color = "#FFFFFF";
    rodape.style.color = "#cccccc";
    rodapeLink.style.color = "#cccccc";
    icon.src = "img/lua.svg"; 
    icon.alt = "Lua Icon";
  } else {
    body.style.backgroundColor = "#fff";  
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
    paragrafos[i].style.color = "#cccccc";  
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

//trocando cor bk div card
const cxCardProjeto = document.querySelectorAll(".card");

// Iterar sobre a coleção de elementos <p>
for (let i = 0; i < cxCardProjeto.length; i++) {
  if (isBlack) {
    cxCardProjeto[i].style.backgroundColor = "#363636";  
  } else {
    cxCardProjeto[i].style.backgroundColor = "#FFF";  
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
  pElement.innerText = '<!-- selecione o card para mais informações -->';
}



//slider de imagens projeto
var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});