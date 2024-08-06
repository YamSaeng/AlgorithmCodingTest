function solution(n) {
     var answer = 0;

    while (true) {
        var Quotient = Math.floor(n % 10);
        answer = answer + Quotient;

        n = Math.floor(n / 10);

        if (n < 1) {
            break;
        }
    }

    return answer;
}

 // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
 console.log(solution(9010119))