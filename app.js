function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Não foram encontrados resultados para sua busca.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    
    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                ${dado.iframe}
                <a href="${dado.link}">Saiba mais</a>
            </div>
            
        `

        }
        
        
    }

    if (!resultados) {
        resultados = "<p>Não foram encontrados resultados para sua busca.</p>"
    }

    section.innerHTML = resultados
}




