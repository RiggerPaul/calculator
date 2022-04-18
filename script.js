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
  //checkIfEvilAll();
}

const equalBtn = document.getElementById('equals');

eqlBtn.onclick = function(){
  if (firstOperandSpan.textContent != '' && operatorSpan.textContent != '' && secondOperandSpan.textContent != ''){
      let answer = roundTo5decimalsMax(operate(operatorSpan.textContent, firstOperandSpan.textContent, secondOperandSpan.textContent));
      answerZone.textContent = answer;
      firstOperandSpan.textContent = '';
      operatorSpan.textContent = '';
      secondOperandSpan.textContent = '';
      checkIfEvilAll();
  } else {
      console.log("Wat u doin mon?");
  }
}

/*function sum(array) {
  return array.reduce((total, current) => total + current, 0);

}*/

/*const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};*/
