function solution(s) {
    let answer = 0;
    let isX = 0;
    let notX = 0;
    let x = "";

    for (let i = 0; i < s.length; i++) {
        if (x == "") {
            x = s[i];
            isX++;
            continue;
        }

        if (x == s[i]) {
            isX++;
        }            
        else {
            notX++;
        }            

        if (isX == notX) {
            answer++;
            isX = 0; notX = 0;
            x = "";
        }
    }

    if (isX != 0) {
        answer += 1;
    }        

    return answer;
}