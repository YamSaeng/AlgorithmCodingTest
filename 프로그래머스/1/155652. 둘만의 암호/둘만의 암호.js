function solution(s, skip, index) {
    let answer = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        for (let j = 0; j < index;) {
            c = String.fromCharCode(c.charCodeAt() + 1);

            // 다시 a로 바꿈
            if (c === String.fromCharCode('z'.charCodeAt() + 1)) {
                c = 'a';
            }

            let isSkip = false;

            for (let k = 0; k < skip.length; k++) {
                if (c === skip[k]) {
                    isSkip = true;
                    break;
                }
            }

            if (isSkip === false) {
                j++;
            }            
        }

        answer.push(c);
    }

    return answer.join('');
}