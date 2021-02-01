<script>
         document.getElementById('case-increase').addEventListener('click',function(){
         const caseInput = document.getElementById('caseCount');
         const caseCount = parseFloat(caseInput.value);

         const caseNewCount=caseCount + 1;
         caseInput.value = caseNewCount;
         const caseTotal= caseNewCount * 59;
         document.getElementById('case-total').innerText= '$' + caseTotal;
        

      })


      document.getElementById('case-decrease').addEventListener('click',function(){
         const caseInput = document.getElementById('caseCount');
         const caseCount = parseFloat(caseInput.value);

         const caseNewCount=caseCount - 1;
         caseInput.value = caseNewCount;
         const caseTotal= caseNewCount * 59;
         document.getElementById('case-total').innerText= '$' + caseTotal;
        

      })
   </script>