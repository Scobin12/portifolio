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

//mudando cor fundo
let isBlack = false;

function toggleBackgroundColor() {
  const body = document.body;
  const icon = document.getElementById('icon');

  isBlack = !isBlack;

  if (isBlack) {
    body.style.backgroundColor = "#363636";  /* Mudança para cor preta (#000000) */
    icon.src = "img/lua.svg"; // Troca a imagem para a lua (cor preta)
    icon.alt = "Lua Icon";
  } else {
    body.style.backgroundColor = "#FFFFFF";  /* Mudança para cor branca (#ffffff) */
    icon.src = "img/sol.svg"; // Troca a imagem para o sol (cor branca)
    icon.alt = "Sol Icon";
  }
}