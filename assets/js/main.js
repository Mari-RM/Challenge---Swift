// carrossel

document.addEventListener("DOMContentLoaded", () => {
  const carouselEl = document.getElementById("carouselExample");
  const carousel = new bootstrap.Carousel(carouselEl, {
    interval: false,
    wrap: false
  });

  const telas = [
    { btnId: "proximo1", voltaId: "voltar1" },
    { btnId: "proximo2", voltaId: "voltar2" },
    { btnId: "proximo3", voltaId: "voltar3" },
    { btnId: "proximo4", voltaId: "voltar4" },
    { btnId: "proximo5", voltaId: "voltar5" },
    { voltaId: "voltar6" }
  ];

  telas.forEach((tela, index) => {
    const btn = document.getElementById(tela.btnId);
    const back = document.getElementById(tela.voltaId);

    btn?.addEventListener("click", () => {
      carousel.next();
    });

    back?.addEventListener("click", () => {
      carousel.prev();
    });
  });

  const nomeInput = document.getElementById("nomeCliente");
  const cepInput = document.getElementById("cepCliente");
  const proximo1 = document.getElementById("proximo1");

  function verificarTela1() {
    proximo1.disabled = !(nomeInput.value.trim() && cepInput.value.trim());
  }

  nomeInput.addEventListener("input", verificarTela1);
  cepInput.addEventListener("input", verificarTela1);

  document.querySelectorAll(".cards-grid").forEach(grid => {
    const nextBtn = grid.querySelector(".next-btn");
    const cards = grid.querySelectorAll(".card-interactive");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        if (nextBtn) nextBtn.disabled = false;
      });
    });
  });
});
