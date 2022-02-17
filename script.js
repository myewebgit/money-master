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