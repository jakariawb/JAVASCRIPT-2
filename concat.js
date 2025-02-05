var num1 = ['kalam', 'salam', 'rustom']
var num2 = ['ami', 'ar', 'tumi',];
var num3 = num1.concat(num2);
console.log(num3)

var num = new Array();
// var num = [10,20, 30,40,50,20];
for(var i=0 ; i<=5; i++){
    num[i] = parseInt(prompt('Enter Your First Number:'))
}
var sum = 0;
for(var i = 0; i<=5; i=i+1){
    // console.log(num[i]);
    sum = sum + num[i];
}
console.log('sum Number = '+ sum)

