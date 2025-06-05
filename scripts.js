let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")

function mudarvisual(cor, imagem) {

    tenis.classList.add("troca-efeito")

    body.style.backgroundColor = cor

    // Contador de Tempo
    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);


}