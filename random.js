
var name1 = 0;
var name2 = 0;

for (var kun = 0; kun<=5;kun++){

    var gutssNumber = parseInt(prompt('Enter a number from 1 to 5 :'));
    var randomNumber = Math.floor(Math.random()*3)+1;

    if(gutssNumber == randomNumber){
        console.log('you have won');
        name1++;
    }else{
        console.log('you have lost . random was' + randomNumber);
        name2++;
    }
}

document.write('win number'+ name1 + '<br/>');
document.write('lose number' + name2); 


// if(gutssNumber == randomNumber){
//     console.log('you have won');
// }else{
//     console.log('you have lost . random was' + randomNumber)
// }

