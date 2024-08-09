function solution(n) {
    var answer = 0;

    var third = [];

    while (n > 0) {
        third.push(n % 3);
        n = Math.floor(n / 3);
    }

    var mul = 1;
    for (var i = third.length - 1; i >= 0; i--) {
        answer += third[i] * mul;
        mul *= 3;
    }

    return answer;
}
