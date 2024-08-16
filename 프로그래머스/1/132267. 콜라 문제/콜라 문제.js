function solution(a, b, n) {
    var cocaCount = 0;

    while (n >= a) {
        cocaCount += Math.floor(n / a) * b;        
        n = Math.floor(n / a) * b + n % a;
    }

    return cocaCount;
}