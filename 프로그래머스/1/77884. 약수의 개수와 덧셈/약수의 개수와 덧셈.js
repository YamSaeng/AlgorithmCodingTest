function solution(left, right) {
   var answer = 0;

for (var i = left; i <= right; i++) {
    var divisorCount = 0;
    for (var j = 1; j <= i; j++) {
        if (i % j == 0) {
            divisorCount++;
        }
    }

    if (divisorCount % 2 == 0) {
        answer += i;
    }
    else {
        answer -= i;
    }
}

return answer;
}