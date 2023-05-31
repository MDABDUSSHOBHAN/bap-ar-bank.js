document.getElementById('diposit-field').addEventListener('click', function () {


    console.log('This is abdus_shobhan');
    // Get the input from diposit input field....

    const dipositFild = document.getElementById('diposit_input');
    const newdipositAmountstring = dipositFild.value;
    const newdipositAmount = parseFloat(newdipositAmountstring);

    //    console.log(dipositAmount);


    //    Get the diposit total amount.......           
    const Total_diposit = document.getElementById('diposit_total');

    const previousDipositstring = Total_diposit.innerText;
    const previousDiposit = parseFloat(previousDipositstring);

    //    add number to set the total diposit......

    const currentDipositTotal = previousDiposit + newdipositAmount;

    Total_diposit.innerText = currentDipositTotal;

    dipositFild.value = '';

    // get ballance current total....
    // That is step-04
    const balanceTotal = document.getElementById('balance_total');
    const totalnewbalancestring = balanceTotal.innerText;
    const totalnewbalance = parseFloat(totalnewbalancestring);

    const sumTotal = currentDipositTotal + totalnewbalance;
    balanceTotal.innerText = sumTotal;








})
console.log('connected');
