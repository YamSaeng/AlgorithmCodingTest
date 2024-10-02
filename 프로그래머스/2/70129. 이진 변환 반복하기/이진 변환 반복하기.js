function solution(s) {
    var answer = [0, 0];

    while (s.length > 1) {
        answer[0]++;

        for (let i = 0; i < s.length; i++) {
            if (s[i] == '0') {
                answer[1]++;
            }
        }

        s = s.split("0").join("");

        let tempSArray = [];
        let tempsLength = s.length;

        let quotient = 0;
        let remain = 0;
        while (true) {
            quotient = Math.floor(tempsLength / 2);
            remain = tempsLength - quotient * 2;

            tempsLength = quotient;

            tempSArray.push(remain);

            if (quotient == 0) {
                break;
            }
        }

        s = tempSArray.reverse().join("");        
    }

    return answer;
}