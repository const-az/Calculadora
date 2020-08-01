function takeValue(x) {
	reset();
	var aux=x.slice(0,1);
	var valor=document.getElementById('inputwindow').value;
	if((aux!== '*' && aux!== '/' && aux!== '+' && aux!== '-' && aux!== '*0.01*') || valor.toString().length>1){
		document.getElementById('inputwindow').value += x;
	}
}

// CLEAR INPUTS
function clearInput(y) {
	document.getElementById('inputwindow').value = y;
  document.getElementById('outputwindow').value = y;
}

// CLEAR ELEMENT
function clearElement() {
	var result=document.getElementById('inputwindow').value;
	result=result.slice(0,-1);
	if(/\d/.test(result)){
		document.getElementById('inputwindow').value = parseFloat(result);
	}
	else {
		document.getElementById('inputwindow').innerHTML = result;
	}
}

// SHOW RESULT
function calculateResult() {
  try {
    var result = eval(document.getElementById('inputwindow').value);
    if(result !== undefined){
      document.getElementById('outputwindow').value = result;
    }
  } catch (error) {
    document.getElementById('outputwindow').value = 'SynError';
  }
}

// RESET
function reset() {
	var result = document.getElementById('outputwindow').value;
	if(result !== ""){
		document.getElementById('inputwindow').value = "";
		document.getElementById('outputwindow').value = "";
	}
}
