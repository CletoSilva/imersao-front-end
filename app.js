function pesquisar() {
    let section = document.getElementById("resultado-pesquisa"); // Obtém a seção onde os resultados da pesquisa serão exibidos
    let campoPesquisa = document.getElementById("barra-pesquisa").value; // Obtém o valor digitado pelo usuário na barra de pesquisa e converte para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase(); // Converte o campoPesquisa para minúscula para facilitar a pesquisa

    // Inicializa variáveis para construir o HTML dos resultados
    let resultado = "";
    let dado = "";
    let descricao = "";
    let tags = "";
    let primeiroElemento = true; // Flag para adicionar elementos específicos ao primeiro resultado
    let contador = 0; // Contador para limitar a quantidade de descrições adicionais

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        alert("Nada foi encontrado. Você precisa digitar o nome de um componente.");
        return;
    }

    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
        // Converte os campos do dado para minúsculas para facilitar a comparação
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está presente em algum dos campos
        if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Constrói o HTML para cada resultado, incluindo lógica para o primeiro elemento e limitação de descrições
            resultado += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <h3>${dado.subtitulo}</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <h3>${dado.subtitulo2}</h3>
                <p>${dado.descricao2}</p>
                <p>${dado.descricao3}</p>
                ${contador < 2 ? `<p>${dado.descricao4}</p>` : ''}
                <p>${dado.conclusao}</p>

                ${primeiroElemento ? `
                <h3>${dado.subtitulo3}</h3>
                <p>${dado.descricao6}</p>
                ` : ''}
            </div>
        `;
        }

        // Reseta a flag do primeiro elemento e incrementa o contador
        primeiroElemento = false;
        contador++;

    }

    // Verifica se nenhum resultado foi encontrado
    if (!resultado) {
        alert("Essa palavra não foi encontrada no nossso banco de dados.");
    }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultado;
}

// Obtém o elemento de input
const inputPesquisa = document.getElementById("barra-pesquisa");

// Adiciona o evento keypress ao input
inputPesquisa.addEventListener('keypress', (event) => {
    // Verifica se a tecla pressionada é Enter
    if (event.key === 'Enter') {
        pesquisar();
    }
})



