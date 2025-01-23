// Retorna a página para o topo ao clicar no botão 
const botaoTopo = document.getElementById('seta-circulo');

botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
});