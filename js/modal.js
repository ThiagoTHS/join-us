 var modal = document.getElementById('myModal');
    var bot = document.getElementById('myBotao');
    bot.onclick = function(){
        modal.style.display = "block";
    }
    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close")[0];
    // Quando o usuário clica em <span> (x), feche o modal
    span.onclick = function() { 
        modal.style.display = "none";
    }