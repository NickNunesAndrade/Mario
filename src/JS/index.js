/*

Objetivo 1 - quando o usuario clicar no botao de veja o trailer, devemos abrir a modal com o video do trailer.

    * Passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js.
    * Passo 2 - dar um jeito de identificar quando o usuario clicar no botao.
    * Passo 3 - dar um jeito de pegar o elemento da modal no js.
    * Passo 4 - abrir a modal na tela.

Objetivo 2 - quando o usuario clicar no X devemos fechar a modal. 

    * Passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js.
    * Passo 2 - dar um jeito de pegar identificar quando o usuario clicar no X.
    * Passo 3 - fecahar a modal.

*/

const botao = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fechar = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const link = video.src;



botao.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", link);
})

fechar.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");  
})

console.log(video.src);











