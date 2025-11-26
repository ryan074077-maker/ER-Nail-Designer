function iniciarCarrossel(intervalo = 4000) {
  const imagens = document.querySelectorAll('.carrossel img');
  let index = 0;

  setInterval(() => {
    imagens[index].classList.remove('active');
    index = (index + 1) % imagens.length;
    imagens[index].classList.add('active');
  }, intervalo);
}

window.onload = () => iniciarCarrossel(4000);

const modal = document.getElementById('modal');
const btnAbrir = document.getElementById('abrirModal');
const btnFechar = document.getElementById('fecharModal');

btnAbrir.onclick = () => modal.style.display = 'flex';
btnFechar.onclick = () => modal.style.display = 'none';

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.getElementById('ano').textContent = new Date().getFullYear();