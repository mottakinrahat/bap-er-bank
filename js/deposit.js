
let DepositVal=0;
document.getElementById('deposit-btn').addEventListener('click',function(){
  
 const depositValue=document.getElementById('deposit-input').value;
 const newDepositValue=parseFloat(depositValue);


const preValue=document.getElementById('deposit-money');        
const previousDepositTotal=preValue.innerText;

const preDepositValue=parseFloat(previousDepositTotal);
console.log(typeof preDepositValue);
const newSum=newDepositValue+preDepositValue;

preValue.innerText=newSum;



const balanceTotal=document.getElementById('balance-prev');
const newBalanceTotalString=balanceTotal.innerText;
const thePrevBalance=parseFloat(newBalanceTotalString);

// sum
const currentBalanceTotal=thePrevBalance+newDepositValue;

balanceTotal.innerText=currentBalanceTotal;

document.getElementById('deposit-input').value="";
})

