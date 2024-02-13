function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const rTotal = getInputvalue('phone') * 30;
        const caseTotal = getInputvalue('case') * 40;
        const Total = rTotal + caseTotal;

        document.getElementById('total').innerText = Total;
    }


document.getElementById('case-plus').addEventListener('click',function(){
   upadateCaseNumber('case', 40 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
upadateCaseNumber('case', 40, false);
});

document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',30, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',30 , false);
});