
function updateCaseNumber(isIncrease){
  const caseInputField = document.getElementById("caseInput-field");
  const caseInputFieldString = caseInputField.value;
  const caseInputFieldNumber = parseInt(caseInputFieldString);
  let caseInputFieldNumberAdded;

  if(isIncrease === true){
    caseInputFieldNumberAdded = caseInputFieldNumber + 1;
  }
  else{
    caseInputFieldNumberAdded = caseInputFieldNumber -1;
  }
  caseInputField.value = caseInputFieldNumberAdded;

  return caseInputFieldNumberAdded;
}



function updateCaseTotalPrice (caseInputFieldNumberAdded){
  const caseTotalPrice = caseInputFieldNumberAdded * 60;
  const caseTotalElement = document.getElementById('case-total')
  caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById("casePlus-btn").addEventListener("click", function () {
  const caseInputFieldNumberAdded = updateCaseNumber(true);
  updateCaseTotalPrice(caseInputFieldNumberAdded); 


});

document.getElementById("caseMinus-btn").addEventListener("click", function () {
 const caseInputFieldNumberAdded = updateCaseNumber(false)

  updateCaseTotalPrice(caseInputFieldNumberAdded);
});
