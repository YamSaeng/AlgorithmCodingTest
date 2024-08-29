function solution(answers) {
    var answer = [];

    let scores = [0, 0, 0];

    let students = [[1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5,],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == students[0][i % 5]) {
            scores[0] += 1;
        }

        if (answers[i] == students[1][i % 8]) {
            scores[1] += 1;
        }

        if (answers[i] == students[2][i % 10]) {
            scores[2] += 1;
        }
    }

    let maxScore = Math.max(...scores);

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == maxScore) {
            answer.push(i + 1);
        }
    }

    return answer;
}