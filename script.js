const nomes = document.querySelectorAll('.name');
const precos = document.querySelectorAll('.price');
const pesos = document.querySelectorAll('.peso');
const product = document.querySelectorAll('.product');

// Botões para mudança de cardapio

const pizzaBtn = document.querySelector('.btn-pizza');
const burguerBtn = document.querySelector('.btn-burguer');
const homeBtn = document.querySelector('.btn-home');

// Função para mudança de cardapio

pizzaBtn.addEventListener('click', cardapioPizza);
burguerBtn.addEventListener('click', cardapioBurguer);
homeBtn.addEventListener('click', home);

let homepage = document.querySelector('.home');
let menu = document.querySelector('.menu');
// Arrays de Produtos //

let pizzas = [
  {
    nome: 'Pizza1',
    img: './img/1.png',
    desc: 'Linda pizza de mussarela',
    preco: '22.90',
    peso: '140 gr',
  },
  {
    nome: 'Pizza2',
    img: './img/2.png',
    desc: 'Linda pizza de mussarela',
    preco: '29.90',
    peso: '140 gr',
  },
  {
    nome: 'Pizza3',
    img: './img/3.png',
    desc: 'Linda pizza de mussarela',
    preco: '22.90',
    peso: '140 gr',
  },
];

let burguers = [
  {
    nome: 'Burguer1',
    img: './img/4.png',
    desc: 'Linda pizza de mussarela',
    preco: '22.90',
    peso: '140 gr',
  },
  {
    nome: 'Burguer2',
    img: './img/5.png',
    desc: 'Linda pizza de mussarela',
    preco: '22.90',
    peso: '140 gr',
  },
  {
    nome: 'Burguer3',
    img: './img/6.png',
    desc: 'Linda pizza de mussarela',
    preco: '22.90',
    peso: '140 gr',
  },
];

// Alterando dinamicamente os itens do cardapio //

function cardapioPizza(e) {
  menu.classList.remove('show');
  homepage.classList.add('show');
  menu.innerHTML = '';
  product.forEach((el, id) => {
    menu.innerHTML += `
      <div class="d-flex flex-column align-items-center product m-2 slide-in-left">
            <img src="img/pizza/${id + 1}.png">
            <h2 class="name">${pizzas[id].nome}</h2>
            <h5 class="peso">${pizzas[id].peso}</h5>
            <h2 class="price">${pizzas[id].preco} </h2>

            <button class="btn btn-danger" type="button">Comprar</button>
      </div>`;
  });
}
function cardapioBurguer(e) {
  menu.classList.remove('show');
  homepage.classList.add('show');
  menu.innerHTML = '';
  product.forEach((el, id) => {
    menu.innerHTML += `
      <div class="d-flex flex-column align-items-center product m-2 slide-in-left">
            <img src="img/burguer/${id + 1}.png">
            <h2 class="name">${burguers[id].nome}</h2>
            <h5 class="peso">${burguers[id].peso}</h5>
            <h2 class="price">${burguers[id].preco} </h2>

            <button class="btn btn-danger" type="button">Comprar</button>
      </div>`;
  });
}


function home(el) {
  homepage.classList.remove('show');
  menu.classList.add('show');
  homepage.innerHTML = `<div class="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/slide1.png" class="d-block" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="img/slide2.png" class="d-block" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>`;
}
