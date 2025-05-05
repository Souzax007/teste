let itensNoCarrinho = 0;

function adicionarAoCarrinho() {
  itensNoCarrinho++;
  document.getElementById('contadorCarrinho').innerText = itensNoCarrinho;
}
  // Mostrar ou ocultar pedidos
  function togglePedidos(event) {
    event.stopPropagation(); // Evita conflito com clique global
    const caixa = document.getElementById("caixaPedidos");
    caixa.style.display = caixa.style.display === "block" ? "none" : "block";
  }

  // Fechar pedidos ao clicar fora
  window.addEventListener('click', function (e) {
    const caixa = document.getElementById("caixaPedidos");
    const notificacao = document.querySelector('.notificacao');
    if (!notificacao.contains(e.target)) {
      caixa.style.display = 'none';
    }
  });

  // Drag and drop básico
  const pedidos = document.querySelectorAll('.pedido');
  let dragSrcEl = null;

  pedidos.forEach(pedido => {
    pedido.addEventListener('dragstart', function (e) {
      dragSrcEl = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    });

    pedido.addEventListener('dragover', function (e) {
      if (e.preventDefault) e.preventDefault();
      return false;
    });

    pedido.addEventListener('drop', function (e) {
      if (e.stopPropagation) e.stopPropagation();
      if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
      return false;
    });
  });

  // Trocar cor do botão ao digitar
  const input = document.getElementById('campoPesquisa');
  const botao = document.getElementById('botaoPesquisa');

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      botao.classList.add('ativo');
    } else {
      botao.classList.remove('ativo');
    }
  });
  function toggleDropdown(event) {
    event.preventDefault();
    const menu = document.getElementById('dropdownCategorias');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  
  // Opcional: fecha dropdown se clicar fora
  document.addEventListener('click', function(e) {
    const menu = document.getElementById('dropdownCategorias');
    const item = document.querySelector('.dropdown');
    if (!item.contains(e.target)) {
      menu.style.display = 'none';
    }
  });

  