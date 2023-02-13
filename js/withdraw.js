document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawBalString=document.getElementById('withdrawMY').value;
    const withdrawBalNum=parseFloat(withdrawBalString);
   

  const prevWithdrawStr=document.getElementById('withdraw-money')
  const  stringprevWithdraw=prevWithdrawStr.innerText;
   const prevWithdrawNum=parseFloat(stringprevWithdraw);
  
    const newWithdrawNum=withdrawBalNum+prevWithdrawNum;
     prevWithdrawStr.innerText=newWithdrawNum;

     document.getElementById('withdrawMY').value="";

     const TotalBal=document.getElementById('balance-prev');
     const totalBalnew=TotalBal.innerText;
     const newBelence=totalBalnew-withdrawBalNum;
     TotalBal.innerText=newBelence;
      
})