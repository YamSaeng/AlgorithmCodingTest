function solution(s, n) {
    var tempAnswer = [];

    for (var i = 0; i < s.length; i++) {
        var array = [];
        array = s[i][n] + s[i];

        tempAnswer.push(array);
    }

    tempAnswer.sort();

    var answer = [];
    for (var i = 0; i < s.length; i++) {
        answer.push(tempAnswer[i].slice(1, tempAnswer[i].length));
    }

    return answer;
}
