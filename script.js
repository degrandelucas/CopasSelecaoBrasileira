  // Adiciona o comportamento de acordeão
  document.addEventListener("DOMContentLoaded", function() {
    const titulos = document.querySelectorAll(".acordeao-titulo");
    titulos.forEach((titulo) => {
      titulo.addEventListener("click", () => {
        const conteudo = titulo.nextElementSibling;
        const seta = titulo.querySelector("p");
        const isOpen = titulo.classList.contains("acordeao-selecionado");

        // Fecha o conteúdo se estiver aberto e nenhum outro título foi selecionado
        if (isOpen && document.querySelectorAll(".acordeao-titulo.acordeao-selecionado").length === 1) {
          titulo.classList.remove("acordeao-selecionado");
          conteudo.classList.remove("conteudo-selecionado");
          seta.textContent = "▼"; // Define a seta para baixo
        } else {
          // Fecha o conteúdo anteriormente selecionado
          const tituloSelecionadoAnterior = document.querySelector(".acordeao-titulo.acordeao-selecionado");
          const conteudoSelecionadoAnterior = document.querySelector(".conteudo.conteudo-selecionado");
          if (tituloSelecionadoAnterior && conteudoSelecionadoAnterior) {
            tituloSelecionadoAnterior.classList.remove("acordeao-selecionado");
            conteudoSelecionadoAnterior.classList.remove("conteudo-selecionado");
            tituloSelecionadoAnterior.querySelector("p").textContent = "▼"; // Define a seta para baixo
          }

          // Adiciona a classe ao título clicado
          titulo.classList.add("acordeao-selecionado");

          // Adiciona a classe ao conteúdo associado
          conteudo.classList.add("conteudo-selecionado");

          // Alterna a direção da seta
          if (seta.textContent === "▼") {
            seta.textContent = "▲";
          } else {
            seta.textContent = "▼";
          }
        }
      });
    });
  });