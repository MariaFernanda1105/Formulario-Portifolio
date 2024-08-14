document.addEventListener("DOMContentLoaded", function() {
    var botaoForm = document.querySelector("#botao-form");

    botaoForm.addEventListener("click", function(event){
        event.preventDefault();
       
        var formAluno = document.querySelector("#form-user");

        // Salvando os valores no localStorage
        localStorage.setItem('titulo', formAluno.titulo.value);
        localStorage.setItem('desc', formAluno.desc.value);

        var imagemInput = document.querySelector("#foto-form");
        
        // Verifica se há uma imagem selecionada
        if (imagemInput.files && imagemInput.files[0]) {
            var fr = new FileReader();
            
            fr.onload = function(e) {
                localStorage.setItem('imagem-form', e.target.result);
                // Redireciona após carregar a imagem
                window.location.href = "formulario.html";
            };
            
            fr.readAsDataURL(imagemInput.files[0]);
        } else {
            // Redireciona imediatamente se nenhuma imagem for selecionada
            window.location.href = "formulario.html";
        }
    });
});
