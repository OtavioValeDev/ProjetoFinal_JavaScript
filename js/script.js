// botão que aciona a api e gera as imagens
var buttonGerar = document.getElementById('btn-gerar');
buttonGerar.addEventListener('click', () => {
    console.log("teste funcao Gerar");
    geraImagens();
});

// apaga as imagens geradas
var buttonApagar = document.getElementById('btn-apagar'); // Correção aqui
buttonApagar.addEventListener('click', () => { // Correção aqui
    console.log("teste funcao Apagar");
    apagaImagens();
});

//gera as imagens
function geraImagens() {
    //url da API
    var url = "https://jsonplaceholder.typicode.com/photos?_limit=5";//da uma olhada no photos

    //json
    fetch(url).then(response => response.json()).then(json => {
        console.log(json); // Verificando o conteúdo da resposta

        // Verificar se a resposta é um array antes de usar o forEach
        if (Array.isArray(json)) {
            var div = document.getElementById('tela');

            json.forEach(photo => { // Certificando-se de que a variável é singular ('photo')
                var img = document.createElement('img');
                img.src = photo.thumbnailUrl; // Usando a propriedade correta (src)
                img.alt = photo.title;
                div.appendChild(img);
            });
        }
    });
}

//apaga as imagens
function apagaImagens() {
    var div = document.getElementById('tela'); // Garantindo que a div será selecionada corretamente
    div.innerHTML = ""; // Limpa o conteúdo da div
}