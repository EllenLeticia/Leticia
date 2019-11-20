//capturar o evento de link butão
const btn = document.querySelector('button');
btn.onclick = function() {
    pegaValoresDoForm();
}


//pegar os valores que estão preenchidos nos campos
function pegaValoresDoForm(){
    const titulo = document.querySelector('#titulo').value;
    const texto = document.querySelector('#texto').value;
    const autor = document.querySelector('#autor').value;
    const postagem = {titulo: titulo, texto: texto, autor: autor};
    enviaParaAPI(postagem);
}
n1,n2n3; 

//enviar os valores no formato do objeto postagem para a API
async function enviaParaAPI (postagem) {
    const resposta = await fetch('http://localhost:3000/postagens', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postagem)
    });
    if (resposta.status === 200) {
        alert('Salvo com Sucesso!');
    }
}
