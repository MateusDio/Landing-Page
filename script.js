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


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card1');
  const btnPrev = document.getElementById('anterior');
  const btnNext = document.getElementById('proximo');
  let currentIndex = 0;


  cards.forEach((card, i) => {
    card.style.display = 'none';
    card.style.animation = '';
  });
  cards[currentIndex].style.display = 'flex';

  function showCard(newIndex, direction) {
    if (newIndex === currentIndex) return;

    const currentCard = cards[currentIndex];
    const nextCard = cards[newIndex];

 
    if (direction === 'next') {
      currentCard.style.animation = 'sairParaEsquerda 0.5s forwards';
      nextCard.style.animation = 'entrarDaDireita 0.5s forwards';
    } else {
      currentCard.style.animation = 'sairParaDireita 0.5s forwards';
      nextCard.style.animation = 'entrarDaEsquerda 0.5s forwards';
    }

    
    nextCard.style.display = 'flex';

    setTimeout(() => {
      currentCard.style.display = 'none';
      currentCard.style.animation = '';
      nextCard.style.animation = '';
      currentIndex = newIndex;
    }, 500); 
  }

  btnNext.addEventListener('click', () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= cards.length) nextIndex = 0;
    showCard(nextIndex, 'next');
  });

  btnPrev.addEventListener('click', () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = cards.length - 1;
    showCard(prevIndex, 'prev');
  });
});

