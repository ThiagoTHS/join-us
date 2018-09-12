function mudaNum (numero){
		document.getElementById('num').innerHTML = numero;
	}
	function mudaFormat (item){
		var i;
		for (i = 1; i <= 10; i++){
			if(item == i){
				document.getElementById('img'+item).src = "ellipse_selecao.png";
				mudaNum();
			}
			else{
				document.getElementById('img'+i).src = "ellipse.png";
			}
		}
	}
	function mudaCorNome(nome) {
		if (nome == 1)
			document.getElementById('cor').style.color = "#A9095E";
		if (nome == 2)
			document.getElementById('cor').style.color = "#6B85C1";
		if (nome == 3)
			document.getElementById('cor').style.color = "#A14830";
		if (nome == 4)
			document.getElementById('cor').style.color = "#000000";
	}
	function mudaCor (color){
		document.getElementById('cor').innerHTML = color;
	}
	function someCirculo (item){
		var i;
		for (i = 1; i <= 4; i++){
			if(item == i){
				document.getElementById('cir_am'+item).style.opacity = 1;
			}
			else{
				document.getElementById('cir_am'+i).style.opacity = 0;
			}
		}
	}