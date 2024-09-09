function solution(babbling) {
    let answer = 0;    

    for (let i = 0; i < babbling.length; i++) {

        let isCheck = true;
        let babyStrDuplicationCheck = 0;

        for (let j = 0; j < babbling[i].length; j++) {           

            if (babbling[i].substr(j, 3) == "aya" && babyStrDuplicationCheck != 1) {
                babyStrDuplicationCheck = 1;
                j += 2;
            }
            else if (babbling[i].substr(j, 2) == "ye" && babyStrDuplicationCheck != 2) {
                babyStrDuplicationCheck = 2;
                j += 1;
            }
            else if (babbling[i].substr(j, 3) == "woo" && babyStrDuplicationCheck != 3) {
                babyStrDuplicationCheck = 3;
                j += 2;
            }
            else if (babbling[i].substr(j, 2) == "ma" && babyStrDuplicationCheck != 4) {
                babyStrDuplicationCheck = 4;
                j += 1;
            }
            else {
                isCheck = false;
                break;
            }            
        }

        if (isCheck == true) {
            answer++;
        }
    }

    return answer;
}