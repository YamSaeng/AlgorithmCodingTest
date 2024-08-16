function solution(s) {
    var answer = [];

    for (var i = 0; i < s.length; i++) {
        var word = s[i];
        var sub = 0;
        var minSub = 9999999999999;

        for (var j = 0; j < i; j++) {
            if (s[j] == word) {
                sub = i - j;

                if (minSub > sub) {
                    minSub = sub;
                }
            }
        }

        if (sub == 0) {
            answer.push(-1);
        } else {
            sub = minSub;
            answer.push(sub);
        }
    }

    return answer;
}