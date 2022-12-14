import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();

const from = document.querySelector('.form');
from.addEventListener('submit', event =>{
  event.preventDefault();
  controller.adiciona();
})