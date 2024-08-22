function solution(k, score) {
    var answer = [];

    let honors = [];    

    honors.push(score[0]);
    answer.push(score[0]);    

    for (let i = 1; i < score.length; i++) {

        let Find = false;
        let pushScore = score[i];
        let honorsLength = honors.length;
        for (let j = 0; j < honorsLength; j++) {
            if (honors[j] != null) {
                if (pushScore >= honors[j]) {
                    honors.push(pushScore);
                    Find = true;
                    break;
                }
            }
        }    

        if (Find == false && honors.length < k) {
            honors.push(pushScore);
        }

        honors.sort((a, b) => a - b);

        if (honors.length == k + 1) {
            honors.shift();
        }

        let minValue = Math.min(...honors);
        answer.push(minValue);
    }

    return answer;
}