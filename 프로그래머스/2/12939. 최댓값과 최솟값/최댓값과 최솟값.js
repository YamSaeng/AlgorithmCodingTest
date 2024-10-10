function solution(s) {
    var answer = [];

    let splitArray = s.split(" ").map(x => +x);
    let max = -999999;
    let min = 999999;

    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i] >= max) {
            max = splitArray[i];
        }

        if (splitArray[i] <= min) {
            min = splitArray[i];
        }
    }

    answer.push(min);
    answer.push(max);

    return `${answer[0]} ${answer[1]}`;
}
