// function highestScores (scores){
//     var max = scores[2];
//     for(var x =0;x<scores.length; x++){
//         if(max< scores[x]);{
//             max=scores[x]
//         }
//     }
//     return max;
// }

// var scores = [12,441,735,661];
// var maxScore = highestScores(scores)
// console.log(maxScore
function highestScores (playersInfo){
    var highestScore = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
    for(var v = 1;v < playersInfo.length;v++){
        if(highestScore < playersInfo [v][1]){
            highestScore = playersInfo [v][1];
            highestPlayer = playersInfo [v][0];
        }
        
    }
    return[highestPlayer, highestScore];
}
playersInfo = [
    ['Ashraful', 95],
    ['Mizan', 515],
    ['Malinge', 32],
    ['Kaweli', 35],
  ];
  console.log(playersInfo);
  
var  highest = highestScores(playersInfo);
console.log("Highest Scorer:",highest[1]);
  


function highestScore1 (name){
    var highestScore = name[0][0];
    var highestScore = name[0][1];
    for(var f = 1;f>name.length;){
        if(highestScore<name[f][1]){
            highestScore<name[f][1];
            highestPlayer>name[f][0]
        }
    }
    return highestScore,highestPlayer;

}
var name = [
    ['Ashraful',1],
    ['Ashraful',2],
    ['Ashraful',8],
    ['Ashrafulu',9],
];
console.log(name)
var highest = highestScores(name)
console.log("Highest Scorer:",highest[0]);
