//   external memory  code here

  document.getElementById('memory-16gb').addEventListener('click',function(){
    const memoryUpdatePrice = document.getElementById('memory-price');
    memoryUpdatePrice.innerText = 180;
     productPriceCalculate();
 });
    
 document.getElementById('memory-8gb').addEventListener('click',function(){
    const memoryUpdatePrice = document.getElementById('memory-price');
    memoryUpdatePrice.innerText = 0;
    productPriceCalculate();
 });
//  Extra Storage code here

document.getElementById('ssd-1tb').addEventListener('click',function(){
      const ssdUpdatePrice = document.getElementById('ssd-price');
      ssdUpdatePrice.innerText = 180;
      productPriceCalculate();
 });
document.getElementById('ssd-512gb').addEventListener('click',function(){
        const ssdUpdatePrice = document.getElementById('ssd-price');
        ssdUpdatePrice.innerText = 100;  
        productPriceCalculate(); 
    });
document.getElementById('ssd-256gb').addEventListener('click', function(){
        const ssdUpdatePrice = document.getElementById('ssd-price');
        ssdUpdatePrice.innerText = 0;
        productPriceCalculate();
    });
// delivery code here
 
document.getElementById('prime-delivery').addEventListener('click',function(){
          const deliveryCost = document.getElementById('delivery-cost');
          deliveryCost.innerText=20;
          productPriceCalculate();
    });
 
document.getElementById('free-delivery').addEventListener('click',function(){
        const deliveryCost = document.getElementById('delivery-cost');
          deliveryCost.innerText=0;
          productPriceCalculate();
    });
//   producet calculate
    
function productPriceCalculate(){
    //  best price 
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceAmount= parseFloat(bestPriceText);
        // memory price
    const memoryselectTotal=  document.getElementById('memory-price');
    const memoryselectTotaltext = memoryselectTotal.innerText;
    const memoryselectTotalAmount= parseFloat(memoryselectTotaltext);
        // ssd price 
    const ssdSelectTotal=  document.getElementById('ssd-price');
    const ssdSelectTotaltext = ssdSelectTotal.innerText;
    const ssdSelectTotalAmount= parseFloat(ssdSelectTotaltext);
        // delivery cost
    const deliveryCharge = document.getElementById('delivery-cost');
    const deliveryChargeText= deliveryCharge.innerText;
    const deliveryChargeAmount = parseFloat(deliveryChargeText);
    //  selected total price
    const selectProductTotal = memoryselectTotalAmount + ssdSelectTotalAmount + deliveryChargeAmount + bestPriceAmount;

    const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = selectProductTotal;

};
//    bonus section code code
 document.getElementById('input-button').addEventListener('click',function(){
    const totalPrice = document.getElementById('total-price');
    const totalPriceAmount = parseFloat(totalPrice.innerText);
     const input = document.getElementById('input-code');
     const inputCode  = input.value;
        if(inputCode=='stevekaku'){
            const discuntAmount  = totalPriceAmount * .20;
            const afterDiscuntAmount = totalPriceAmount - discuntAmount;
            const afterDiscuntTotal = document.getElementById('after-discount');
            afterDiscuntTotal.innerText = afterDiscuntAmount;
        }
        else{
            const afterDiscuntTotal = document.getElementById('after-discount');
            afterDiscuntTotal.innerText=totalPriceAmount ;
        }
     input.value='';
 });