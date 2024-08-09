function FindGcd(n, m) {
    var gcd = 1;
    for (var i = 2; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }

    return (gcd);
}

function solution(n, m) {
    var answer = [];

    var gcd = FindGcd(n, m);

    // 유클리드 호제법
    var lcm = (n * m) / gcd;

    answer.push(gcd);
    answer.push(lcm);

    return answer;
}