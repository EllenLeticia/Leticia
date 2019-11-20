const divPostagens = document.getElementById("postagens");

async function consultaAPI(){

    const resposta = await fetch("http://localhost:3000/postagens");
    const postagens = await resposta.json();

    postagens.forEach(postagem => {
        const itemPostagem = `<div class="postagem">
                                <h3>${postagem.titulo}</h3>
                                <p class="data">Publicado em: ${postagem.dataAlteracao}</p>
                            </div>`
        divPostagens.innerHTML = divPostagens.innerHTML + itemPostagem;
    });
}

consultaAPI();



                        
                    
