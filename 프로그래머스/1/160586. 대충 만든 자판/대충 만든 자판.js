function solution(keymap, targets) {
    var answer = [];    

    for (let i = 0; i < targets.length; i++) {                
        answer.push(0);
        for (let j = 0; j < targets[i].length; j++) {
            const targetChar = targets[i][j];

            let minBtnClick = 1000;            
            let findChar = false;

            for (let k = 0; k < keymap.length; k++) {
                for (let l = 0; l < keymap[k].length; l++) {
                    if (keymap[k][l] == targetChar) {
                        if (l < minBtnClick) {
                            minBtnClick = l + 1;
                            findChar = true;
                        }
                    }
                }
            }

            if (findChar == false) {
                answer[i] = -1;
                break;
            }
            
            answer[i] += minBtnClick;
        }        
    }    

    return answer;
}