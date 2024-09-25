document.getElementById('btnMensagem').addEventListener('click', function() {
    var mensagem = document.getElementById('mensagem');
    mensagem.classList.toggle('mensagem-oculta');
    mensagem.style.opacity = 1;
});
