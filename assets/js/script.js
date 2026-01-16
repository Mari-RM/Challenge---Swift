//telas

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.cards-grid').forEach(grid => {
    const botao = grid.querySelector('.next-btn');
    const balao = grid.parentElement.querySelector('.balao');
    const tipo = grid.dataset.tipo;
    let selecionado = null;

    grid.querySelectorAll('.card-interactive').forEach(card => {
      card.addEventListener('click', () => {
        grid.querySelectorAll('.card-interactive').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selecionado = card.dataset.valor;

        if (selecionado === 'outro') {
          const entrada = prompt("Digite sua opção:");
          if (entrada && entrada.trim()) {
            balao.textContent = `Obrigado! Você escolheu: "${entrada}".`;
            selecionado = entrada;
            if (botao) botao.disabled = false;
          } else {
            balao.textContent = "Você não digitou nada. Selecione uma opção.";
            if (botao) botao.disabled = true;
          }
        } else {
          balao.textContent = `Você selecionou: ${card.textContent.trim()}.`;
          if (botao) botao.disabled = false;
        }
      });
    });

    if (botao) {
      botao.addEventListener('click', () => {
        console.log(`${tipo}: ${selecionado}`);
      });
    }
  });

});
