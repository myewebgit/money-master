//*************JS command for save button handler//

document.getElementById('save').addEventListener('click',function(){
    const depositInput = document.getElementById('income-input');
const depositAmountText = depositInput.value;
const depositAmount = parseFloat(depositAmountText);


// save input**********

    const saveInput = document.getElementById('save-input');
    const saveAmountText = saveInput.value;
    const saveAmount = parseFloat(saveAmountText) ;
    const saveTotal = document.getElementById('saving-total');
    saveTotal.innerText = saveAmount * depositAmount * (1/100);
    const savings = parseFloat(saveTotal.innerText);

    


    const remainingTotal = document.getElementById('remaining-total');
const remainingTotalText =remainingTotal.innerText;
const previousremainingTotal = parseFloat(remainingTotalText);
const newremainingTotal = depositAmount - savings;

remainingTotal.innerText = newremainingTotal;

const balanceTotal = document.getElementById('balance-total');
const balanceTotalText =balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = depositAmount - newexpencesTotal;
balanceTotal.innerText = newBalanceTotal;


    
  });

  

  // ***********calculation first part( Calculate Button)**********

  document.getElementById('calculate').addEventListener('click',function(){
    const depositInput = document.getElementById('income-input');
     const depositAmountText = depositInput.value;
const depositAmount = parseFloat(depositAmountText)



// depositInput.value = '';

const foodInput = document.getElementById('food-input');
const foodAmountText = foodInput.value;
const foodAmount = parseFloat(foodAmountText);

//clear Input Button
foodInput.value = '';


const rentInput = document.getElementById('rent-input');
const rentAmountText = rentInput.value;
const rentAmount = parseFloat(rentAmountText);

//clear Input Button
rentInput.value = '';


const clothInput = document.getElementById('cloth-input');
const clothAmountText = clothInput.value;
const clothAmount = parseFloat(clothAmountText);

//clear Input Button
clothInput.value = '';


const expencesTotal = document.getElementById('expences-total');
const expencesTotalText =expencesTotal.innerText;
const previousexpencesTotal = parseFloat(expencesTotalText);
const newexpencesTotal =(rentAmount + foodAmount + clothAmount);
expencesTotal.innerText = newexpencesTotal;


const balanceTotal = document.getElementById('balance-total');
const balanceTotalText =balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = depositAmount - newexpencesTotal;
balanceTotal.innerText = newBalanceTotal;



});