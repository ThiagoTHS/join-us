
	var modal2 = document.getElementById('myModal2');
    var bot = document.getElementById('myBotao2');
    bot.onclick = function(){
        modal2.style.display = "block";
    }
    // Obtenha o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("close2")[0];
    // Quando o usuário clica em <span> (x), feche o modal
    span.onclick = function() { 
        modal2.style.display = "none";
    }

    function id( el ){
		return document.getElementById( el );
	}
	function menos( id_qnt ) 
	{
		var qnt = parseInt( id( id_qnt ).value );
		if( qnt > 0 )
			id( id_qnt ).value = qnt - 1; 
	} 
	function mais( id_qnt )
	{
		id( id_qnt ).value = parseInt( id( id_qnt ).value ) + 1; 
	}
