document.getElementById('save').addEventListener('click',function(){
    const depositInput = document.getElementById('income-input');
const depositAmountText = depositInput.value;
const depositAmount = parseFloat(depositAmountText);


    const saveInput = document.getElementById('save-input');
    const saveAmountText = saveInput.value;
    const saveAmount = parseFloat(saveAmountText) ;
    const saveTotal = document.getElementById('saving-total');
    saveTotal.innerText = saveAmount * depositAmount * (1/100);
    const savings = parseFloat(saveTotal.innerText);

    // Remaining balance*********
    
    const balanceTotal = document.getElementById('balance-total');
const balanceTotalText =balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = depositAmount - newexpencesTotal;
balanceTotal.innerText = newBalanceTotal;

// remaining******** 
    const rbalanceTotal = document.getElementById('r-total');
const rbalanceTotalText =rbalanceTotal.innerText;
const previousrBalanceTotal = parseFloat(rbalanceTotalText);
const newrBalanceTotal = newBalanceTotal - savings;
rbalanceTotal.innerText = newrBalanceTotal;

  })

  // ***********calculation first firt**********

  document.getElementById('calculate').addEventListener('click',function(){
    const depositInput = document.getElementById('income-input');
     const depositAmountText = depositInput.value;
const depositAmount = parseFloat(depositAmountText)

// depositInput.value = '';

const foodInput = document.getElementById('food-input');
const foodAmountText = foodInput.value;
const foodAmount = parseFloat(foodAmountText);

foodInput.value = '';


const rentInput = document.getElementById('rent-input');
const rentAmountText = rentInput.value;
const rentAmount = parseFloat(rentAmountText);

rentInput.value = '';


const clothInput = document.getElementById('cloth-input');
const clothAmountText = clothInput.value;
const clothAmount = parseFloat(clothAmountText);

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