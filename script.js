const cards = document.querySelectorAll("#sobre .card");
const imagem = document.getElementById("imgDinamica");
const cima = document.getElementById("cima");
const scrollsuave = document.querySelector(".scroll-suave");

      
    cima.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    cima.addEventListener("mouseover", () => {
        cima.style.opacity = "0.8";
    });
    cima.addEventListener("mouseout", () => {
        cima.style.opacity = "1";
    });

    window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        cima.style.display = "block";
    } else {
        cima.style.display = "none";
    }
});


cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("active"));

        card.classList.add("active");

        const novaImagem = card.getAttribute("data-img");

        if (novaImagem) {
            imagem.src = novaImagem;
        }
    });
});