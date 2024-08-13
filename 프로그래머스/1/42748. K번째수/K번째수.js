function solution(array, commands) {
    var answer = [];

    for (let i = 0; i < commands.length; i++) {
        var sliceArray = [];

        if (commands[i][0] == commands[i][1]) {
            answer.push(array[commands[i][0] - 1]);
        }
        else {
            sliceArray = array.slice(commands[i][0] - 1, commands[i][1]);
            sliceArray.sort((a, b) => a - b);

            answer.push(sliceArray[commands[i][2] - 1]);
        }
    }

    return answer;
}