<script>

   //one product increase

         document.getElementById('case-increase').addEventListener('click',function(){
         const caseInput = document.getElementById('caseCount');
         const caseCount = parseFloat(caseInput.value);

         const caseNewCount=caseCount + 1;
         caseInput.value = caseNewCount;
         const caseTotal= caseNewCount * 59;
         document.getElementById('case-total').innerText= '$' + caseTotal;
        

      })

//one product decrease

      document.getElementById('case-decrease').addEventListener('click',function(){
         const caseInput = document.getElementById('caseCount');
         const caseCount = parseFloat(caseInput.value);

         const caseNewCount=caseCount - 1;
         caseInput.value = caseNewCount;
         const caseTotal= caseNewCount * 59;
         document.getElementById('case-total').innerText= '$' + caseTotal;
        

      })
   </script>


//casing increase decrease
function handleProductChange(IsIncrease){
   const caseInput = document.getElementById('caseCount');
   const caseCount = parseInt(caseInput.value);
   let caseNewCount= caseCount;

   if(IsIncrease==true){
  caseNewCount= caseCount + 1;}
   if(IsIncrease==false && caseCount > 0 ){
    
    caseNewCount=caseCount - 1;
   }

   
   caseInput.value = caseNewCount;
   const caseTotal= caseNewCount * 59;
   document.getElementById('case-total').innerText= '$' + caseTotal;

}
   

//phone increase decrease
      function handlePhoneChange(isIncrease) {
          const phoneInput = document.getElementById('phone-count');
          const phoneCount = parseInt(phoneInput.value);
          let phoneNewCount = phoneCount;
          if (isIncrease == true) {
              phoneNewCount = phoneCount + 1;
          }
          if (isIncrease == false && phoneCount > 0) {
              phoneNewCount = phoneCount - 1;
          }
          phoneInput.value = phoneNewCount;
          const phoneTotal = phoneNewCount * 1219;
          document.getElementById('phone-total').innerText = '$' + phoneTotal;
      }

