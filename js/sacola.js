var modal2 = document.getElementById('modal2');
var bot = document.getElementById('btn2');
bot.onclick = function(){
    modal2.style.display = "block";
}
var span = document.getElementsByClassName("header__navbar__busca-bag__bag__modal__btn-close")[0];
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
