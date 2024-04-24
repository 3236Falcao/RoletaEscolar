const roleta = document.querySelector('.resultado');
const sortearBtn = document.getElementById('sortearBtn');

sortearBtn.addEventListener('click', () => {
    const numeroSorteado = Math.floor(Math.random() * 100) + 1; // Sorteia um número entre 1 e 100
    roleta.textContent = numeroSorteado;
});
