var amount = 300;

if(amount === 300){
    var discrount = amount * 30 / 100;
    console.log(discrount);
    var payAmount = amount - discrount;
    console.log(payAmount.toFixed(3));
}

var apple = 400;
var egi = 40;

if(apple === 400 || egi <= 40){
   
    var discrount = apple * 30 /100;
    console.log('discount amount = '+discrount)
    var payAmount = apple - discrount;
    console.log("pay Amount = " + payAmount)
}
else{
    console.log('pay full amount :'+ apple)
}
