function solution(s) {
    var answer = '';

    let isFirst = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            isFirst = false;
        }
        else if (isFirst === false) {
            answer += s[i].toUpperCase();
            isFirst = true;
        }
        else {
            answer += s[i].toLowerCase();
        }
    }

    return answer;
}