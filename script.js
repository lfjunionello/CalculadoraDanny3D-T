const checkShu = document.getElementById('checkShu');
const checkAlcance = document.getElementById('checkAlcance');
const checkElementalista = document.getElementById('checkElementalista');
const checkExtrema = document.getElementById('checkExtrema');
const custoFinal = document.getElementById('custoFinal');
const custoBase = document.getElementById('custoBase');

function updateInputValue(){
	var numberPattern = /\d+/g;
	let input = custoBase.value.match( numberPattern );

	if(input == null){
		input = 0;
	}
	
	custoBase.value = input;
	
	calcula();
}

/*
function updateInputValue(){
	var numberPattern = /\d+/g;
	var numberPattern2 = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
	let input = custoBase.value.match( numberPattern );
	if(input != null){
		input = custoBase.value.match( numberPattern2 ).join('');
	}else{
		input = 0;
	}
	
	custoBase.value = input;
	
	calcula();
}
*/

/*

onkeydown="javascript: return event.keyCode === 8 ||
event.keyCode === 46 ? true : !isNaN(Number(event.key))"
*/

function calcula(){

  let custo = parseInt(custoBase.value);

  if(checkShu.checked){
    custo *= 2;
  }

  if(checkExtrema.checked){
    custo *= 2;
  }

  if(checkElementalista.checked){
  	custo = Math.ceil(custo/2);
  }

  if(checkAlcance.checked){
    custo += 2;
  }

  updateValue(custo);
}

function updateValue(newValue){
  custoFinal.innerHTML = "Custo Final: " + newValue;
}
