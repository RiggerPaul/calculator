function add(a, b) {
	return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
	return parseFloat(a) - parseFloat(b);
};
	
function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
};

function divide(a, b){
  if (b != '0'){
  return parseFloat(a) / parseFloat(b)
  } else {
      alert("Divide by zero not allowed");
      clearBtn.click();
  }
}

clearBtn.onclick = function(){
  firstOperandSpan.textContent = '';
  operatorSpan.textContent = '';
  secondOperandSpan.textContent = '';
  answerZone.textContent = '';

}

const equalBtn = document.getElementById('equals');

