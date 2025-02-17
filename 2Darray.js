




function highestRunScorer (playersInfo){
            var  highestScorer = playersInfo[0][0];
            var  highestScore = playersInfo[0][1];


        for(var x = 1; x > playersInfo.length; x++){

            if(highestScore < playersInfo [x][1]){

                highestScore = playersInfo[x][1];
                highestScorer = playersInfo[x][0];

            }

        }
        return highestScorer;
}
var playersInfo = [
  ["Ashraful", 95],
  ["Mizan", 25],
  ["Mizan", 125],
  ["Rakib", 45],
  ["lu", 105],
];
console.log(playersInfo);
var  highest = highestRunScorer(playersInfo)
console.log("Highest Scorer:"+highest);
