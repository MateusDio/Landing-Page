const cards = document.querySelectorAll(".card");
const imagem = document.getElementById("imgDinamica");

cards.forEach(card => {
    card.addEventListener("click", () => {
        
        // Remove classe ativa de todos
        cards.forEach(c => c.classList.remove("active"));

        // Adiciona ao clicado
        card.classList.add("active");

        // Troca a imagem
        const novaImagem = card.getAttribute("data-img");
        imagem.src = novaImagem;
    });
});