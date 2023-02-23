// const item1price = document.getElementById('item1-price');
// const totalPrice = document.getElementById('totalPrice');
// var number = Number(totalPrice.innerHTML);
// const add1 = document.getElementById('add1');
// add1.addEventListener('click',()=>{
//    number = totalPrice + item1price;
//    totalPrice.innerText = number.toString();
// })
const numberi = document.getElementById('numberOfItems');
const totalp = document.getElementById('totalPrice');
var number = Number(totalp.innerText);

const addbtn = document.getElementById('add1');
addbtn.addEventListener('click',()=>{
   const item1price = document.getElementById('item1-price');
   var price1 = Number(item1price.innerText);
   number = number + price1 ;
   totalp.innerText = number.toString();
   var itemnumber1 = Number(numberOfItems.innerText);
   itemnumber1++;
   numberOfItems.innerText = itemnumber1.toString();
});
const removebtn = document.getElementById('remove1');
removebtn.addEventListener('click',()=>{
   const item1price = document.getElementById('item1-price');
   var price1 = Number(item1price.innerText);
   number = number - price1 ;
   totalp.innerText = number.toString();
   var itemnumber1 = Number(numberOfItems.innerText);
   itemnumber1--;
   numberOfItems.innerText= itemnumber1.toString();
   if(number<=0){
      totalp.innerText='0';
   }
   if(itemnumber1<=0){
      numberi.innerText='0';
   }
   else{
      numberi.innerText = itemnumber1.toString();
   }
});

const addbtn2 = document.getElementById('add2');
addbtn2.addEventListener('click',()=>{
   const item2price = document.getElementById('item2-price');
   var price2 = Number(item2price.innerText);
   number = number + price2 ;
   totalp.innerText = number.toString();
   var itemnumber2 = Number(numberOfItems.innerText);
   itemnumber2++;
   numberOfItems.innerText = itemnumber2.toString();
});
const removebtn2 = document.getElementById('remove2');
removebtn2.addEventListener('click',()=>{
   const item2price = document.getElementById('item2-price');
   var price2 = Number(item2price.innerText);
   number = number - price2 ;
   totalp.innerText = number.toString();
   var itemnumber2 = Number(numberOfItems.innerText);
   itemnumber2--;
   numberOfItems.innerText= itemnumber2.toString();
   if(number<=0){
      totalp.innerText='0';
   }
   if(itemnumber2<=0){
      numberi.innerText = '0';
   }
   else{
      numberi.innerText =itemnumber2.toString();
   }
});

const addbtn3 = document.getElementById('add3');
addbtn3.addEventListener('click',()=>{
   const item3price = document.getElementById('item3-price');
   // that price in orgin existed in html which in a string form ,so we have to convert it to number to apply an operation 
   var price3 = Number(item3price.innerText);
   number = number + price3 ;
   totalp.innerText = number.toString();
   var itemnumber3 = Number(numberOfItems.innerText);
   itemnumber3++;
   numberOfItems.innerText = itemnumber3.toString();
});
const removebtn3 = document.getElementById('remove3');
removebtn3.addEventListener('click',()=>{
   const item3price = document.getElementById('item3-price');
   var price3 = Number(item3price.innerText);
   number = number - price3 ;
   totalp.innerText = number.toString();
   var itemnumber3 = Number(numberOfItems.innerText);
   itemnumber3--;
   numberOfItems.innerText= itemnumber3.toString();
   if(number<=0){
      totalp.innerText='0';
   }
   if(itemnumber3<=0){
      numberi.innerText = '0';
   }
   else{
      numberi.innerText = itemnumber3.toString();
   }
});





