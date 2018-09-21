 var modal = document.getElementById('modal1');
    var bot = document.getElementById('btn1');
    bot.onclick = function(){
        modal.style.display = "block";
    }
    var span = document.getElementsByClassName("main__info-produto__modal__content__close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }