function solution(s) {
    var answer = [];

    var i = 0;
    for (var word of s) {
        if (i % 2 == 0) {
            answer.push(word.toUpperCase());
        }
        else {
            answer.push(word.toLowerCase());
        }

        i++;

        if (word == ' ') {
            i = 0;
        }
    }

    return answer.join("");
}
