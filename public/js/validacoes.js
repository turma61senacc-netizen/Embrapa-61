document.addEventListener("DOMContentLoaded", () => {
    const validacoes_validador_grupos = document.querySelectorAll(".validacoes-validador-grupo");

    validacoes_validador_grupos.forEach((validacoes_validador_grupo) => {
        const validacoes_validador_cabecalho =
            validacoes_validador_grupo.querySelector(".validacoes-validador-cabecalho-grupo");

        validacoes_validador_cabecalho.addEventListener("click", () => {
            const validacoes_validador_aberto =
                validacoes_validador_cabecalho.getAttribute("aria-expanded") === "true";

            validacoes_validador_cabecalho.setAttribute("aria-expanded", String(!validacoes_validador_aberto));

            validacoes_validador_grupo.classList.toggle("validacoes-validador-grupo-fechado", validacoes_validador_aberto);
        });
    });

    const validacoes_validador_pesquisas = document.querySelectorAll(
        ".validacoes-validador-linha-pesquisa"
    );

    validacoes_validador_pesquisas.forEach((validacoes_validador_linha) => {
        validacoes_validador_linha.addEventListener("click", () => {
            const validacoes_validador_item =
                validacoes_validador_linha.closest(".validacoes-validador-pesquisa-item");

            if (!validacoes_validador_item) {
                return;
            }

            const validacoes_validador_aberto =
                validacoes_validador_item.classList.contains("validacoes-validador-pesquisa-item-aberto");

            validacoes_validador_item.classList.toggle("validacoes-validador-pesquisa-item-aberto", !validacoes_validador_aberto);

            validacoes_validador_linha.setAttribute("aria-expanded", String(!validacoes_validador_aberto));
        });
    });

    const validacoes_validador_campo_pesquisa =
        document.querySelector(".validacoes-validador-campo-pesquisa");

    if (validacoes_validador_campo_pesquisa) {
        validacoes_validador_campo_pesquisa.addEventListener(
            "input",
            () => {
                const validacoes_validador_termo =
                    validacoes_validador_campo_pesquisa.value
                        .trim()
                        .toLowerCase();

                const validacoes_validador_itens =
                    document.querySelectorAll(".validacoes-validador-pesquisa-item");

                validacoes_validador_itens.forEach(
                    (validacoes_validador_item) => {
                        const validacoes_validador_texto =
                            validacoes_validador_item.textContent.toLowerCase();

                        validacoes_validador_item.style.display =!validacoes_validador_termo || validacoes_validador_texto.includes(validacoes_validador_termo)
                                ? ""
                                : "none";
                    }
                );
            }
        );
    }
});
