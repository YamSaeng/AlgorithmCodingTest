function FindGcd(a, b) {
    let remainder = a % b;
    if (remainder === 0) {
        return b;
    }

    return FindGcd(b, remainder);
}

function solution(arr) {
    let answer = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let GCD = FindGcd(answer, arr[i]);
        let LCM = answer * arr[i] / Math.floor(GCD);
        answer = LCM;
    }

    return answer;
}