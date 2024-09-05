function solution(lottos, win_nums) {
    let answer = [];
    let zero = 0;
    let correct = 0;

    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] == 0) {
            zero++;
        }

        for (let j = 0; j < win_nums.length; j++) {
            if (lottos[i] == win_nums[j]) {
                correct++;
            }            
        }
    }  

    let min = 0;
    let max = 0;

    if (7 - correct >= 6) {
        min = 6;
    }
    else {
        min = 7 - correct;
    }

    if (min - zero < 1) {
        max = 1;
    }
    else {
        max = min - zero;
    }    

    answer.push(max);
    answer.push(min);

    return answer;
}