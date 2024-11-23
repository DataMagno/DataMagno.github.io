document.addEventListener("DOMContentLoaded", () => {
    const profile = document.querySelector(".profile");
    const curriculoButton = document.getElementById("curriculo-button");

    // Verifica se os elementos existem
    if (profile && curriculoButton) {
        // Adiciona evento de clique ao botão "Meu Currículo"
        curriculoButton.addEventListener("click", (e) => {
            e.preventDefault(); // Evita redirecionamento
            profile.classList.add("animate");
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const curriculoButton = document.getElementById("curriculo-button");

    // Verifica se o botão "Meu Currículo" existe
    if (curriculoButton) {
        curriculoButton.addEventListener("click", (e) => {
            e.preventDefault(); // Evita redirecionamento dinâmico
            window.location.href = "curriculo.html"; // Redireciona imediatamente para a página do currículo
        });
    }
});


