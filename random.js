
// var name1 = 0;
// var name2 = 0;

// for (var kun = 0; kun<=5;kun++){

//     var gutssNumber = parseInt(prompt('Enter a number from 1 to 5 :'));
//     var randomNumber = Math.floor(Math.random()*3)+1;

//     if(gutssNumber == randomNumber){
//         console.log('you have won');
//         name1++;
//     }else{
//         console.log('you have lost . random was' + randomNumber);
//         name2++;
//     }
// }

// document.write('win number'+ name1 + '<br/>');
// document.write('lose number' + name2); 


// if(gutssNumber == randomNumber){
//     console.log('you have won');
// }else{
//     console.log('you have lost . random was' + randomNumber)
// }
var number3 = 0;
var number4 = 0;

        for(var e = 1;e<=5;e++){

        var gutssNumber1 = parseInt(prompt('your Gutss Number one to Five:'));
        var randomNumber1 = Math.floor(Math.random()*4)+1;

            if(gutssNumber1===randomNumber1){
                        console.log('you have won');
                        number3++
        }else{

                        console.log('you have lost . random was' + randomNumber1);
                        number4++

             }
                 }
        document.write('wine naumbe' + number3 + '<br/>');
        document.write('loste number'+ number4);
        
