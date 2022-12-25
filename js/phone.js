
function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-filed')
    const phoneNumberString = phoneNumberField.value;
    const phonePreviousNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease){
        newPhoneNumber = phonePreviousNumber + 1;
    }
    else{
        newPhoneNumber = phonePreviousNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1500;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(false);
   updatePhoneTotalPrice(newPhoneNumber);
})