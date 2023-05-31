// #1 add event handelar to the withdraw button......

document.getElementById('withdraw_btn').addEventListener('click', function () {

    //    step:1

    const withdrawField = document.getElementById('withdraw_field');
    const newWithdrawstring = withdrawField.value;
    //    console.log(newWithdraw);
    const newWithdraw = parseFloat(newWithdrawstring);

    // step:04
    const currentWithdrawTotal = document.getElementById('withdraw_value');
    // currentWithdrawTotal.innerText= newWithdraw;
    const previousWithdrawTotalstring = currentWithdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalstring);
       if(isNaN(newWithdraw)){
        alert('Please Provide a valid number!');
       }
    // step:5

    

    // Balance total....
     
    const balance_totalElement=document.getElementById('balance_total');

    const previousBalance=balance_totalElement.innerText;

    const newbanlce=parseFloat(previousBalance);
// condition statements:

  if(newWithdraw > newbanlce){

       Alert('There is not much money in the bank');
       return;
}


// step:4
const withdrawTotal = newWithdraw + previousWithdrawTotal;

    currentWithdrawTotal.innerText = withdrawTotal;
    withdrawField.value = '';



// step:6


    const total_b=newbanlce-newWithdraw;
    balance_totalElement.innerText=total_b;


    

    





    


})