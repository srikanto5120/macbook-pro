  // updatinig price function
 function updateProductPrice(id,price){
      const productPrice = document.getElementById(id);
          productPrice.innerText=price; 
          updatePriceCalculate(); 
      };
//16GB unified memory
  document.getElementById('memory-16gb').addEventListener('click',function(){
    updateProductPrice ('memory-price',180)
    

     });
   //8GB unified memory 
  document.getElementById('memory-8gb').addEventListener('click',function(){
      updateProductPrice ('memory-price',0)
      
      });
    //1TB unified ssd
   document.getElementById('ssd-1tb').addEventListener('click',function(){
      updateProductPrice('ssd-price',180)
      
    });
 //512GB unified ssd
    document.getElementById('ssd-512gb').addEventListener('click',function(){
           updateProductPrice('ssd-price',100);
          
    });
     //256GB unified ssd
    document.getElementById('ssd-256gb').addEventListener('click',function(){
         updateProductPrice('ssd-price',0);
         
    })
 // paid delivery
    document.getElementById('paid-delivery').addEventListener('click',function(){
          updateProductPrice('delivery-cost',20)
    })
  //free delivery
    document.getElementById('free-delivery').addEventListener('click',function(){
        updateProductPrice('delivery-cost',0)
    })
//update price calculate function
    function updatePriceCalculate(){
     //  best price 
     const bestPrice = document.getElementById('best-price');
     const bestPriceText = bestPrice.innerText;
     const bestPriceAmount= parseFloat(bestPriceText);
         // memory price
     const memoryselectPrice=  document.getElementById('memory-price');
     const memoryselectPricetext = memoryselectPrice.innerText;
     const memoryselectTotalAmount= parseFloat(memoryselectPricetext);
         // ssd price 
     const ssdSelectPrice=  document.getElementById('ssd-price');
     const ssdSelectPricetext = ssdSelectPrice.innerText;
     const ssdSelectTotalAmount= parseFloat(ssdSelectPricetext);
         // delivery cost
     const deliveryCharge = document.getElementById('delivery-cost');
     const deliveryChargeText= deliveryCharge.innerText;
     const deliveryChargeAmount = parseFloat(deliveryChargeText);
     //  selected total price
     const selectProductTotal = memoryselectTotalAmount + ssdSelectTotalAmount + deliveryChargeAmount + bestPriceAmount;
 
     const totalPrice = document.getElementById('total-price');
          totalPrice.innerText = selectProductTotal;
          const afterDiscuntTotal = document.getElementById('after-discount');
          afterDiscuntTotal.innerText = selectProductTotal;
 
 };
 //    bonus section code code
  document.getElementById('input-button').addEventListener('click',function(){
      const input = document.getElementById('input-code');
      const inputCode  = input.value;

      const totalPrice = document.getElementById('total-price');
      const totalPriceAmount= parseFloat(totalPrice.innerText);

      const afterDiscuntTotal = document.getElementById('after-discount');
      
      const wongcode = document.getElementById('wrong-code');
         if(inputCode=='stevekaku'){
             const discuntAmount  = totalPriceAmount * .20;
             const afterDiscuntAmount = totalPriceAmount - discuntAmount;
            
             afterDiscuntTotal.innerText = afterDiscuntAmount;
             wongcode.innerText = '';
         }
         else{
              
              wongcode.innerText="wrong-code"
              wongcode.style.color = 'red'
              
         }
      input.value='';
  });
    
 