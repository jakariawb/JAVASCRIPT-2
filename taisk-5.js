function highestScores (scores){
    var max = scores[2];
    for(var x =0;x<scores.length; x++){
        if(max< scores[x]);{
            max=scores[x]
        }
    }
    return max;
}

var scores = [12,441,735,661];
var maxScore = highestScores(scores)
console.log(maxScore)