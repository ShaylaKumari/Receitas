// Retorna a página para o topo ao clicar no botão 
const botaoTopo = document.getElementById('seta-circulo');

botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
});

// Redirecionar
function redirecionar(url) {
    window.location.href = url;
}

// Pesquisar
document.addEventListener("DOMContentLoaded", function() {
    const barraPesquisa = document.getElementById("barra-pesquisa");
    const receitasContainer = document.getElementById("naveg-receitas");
    const receitas = receitasContainer.getElementsByClassName("campo-padrao");

    barraPesquisa.addEventListener("input", function() {
        const pesquisa = barraPesquisa.value.toLowerCase();

        Array.from(receitas).forEach(function(receita) {
            const figcaption = receita.getElementsByTagName("figcaption")[0].textContent.toLowerCase();

            // Verifica se a sequência digitada está presente no figcaption
            if (figcaption.includes(pesquisa)) {
                receita.style.display = ""; // Exibe o item se corresponder
            } else {
                receita.style.display = "none"; // Oculta o item se não corresponder
            }
        });
    });
});
