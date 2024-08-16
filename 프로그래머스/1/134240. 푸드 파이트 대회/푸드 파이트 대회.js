function solution(food) {
    var answer = [];
    var sum = 0;

    for (var i = 1; i < food.length; i++) {
        var Quoient = Math.floor(food[i] / 2);
        sum += Quoient;
        if (Quoient > 0) {
            for (var j = 0; j < Quoient; j++) {
                answer.push(i);
            }
        }
    }

    answer.push(0);

    for (var j = sum - 1; j >= 0; j--) {
        answer.push(answer[j]);
    }

    return answer.join("");
}