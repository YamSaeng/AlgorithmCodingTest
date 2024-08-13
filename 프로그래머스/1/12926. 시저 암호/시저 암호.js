function solution(s, n) {
    var answer = [];
    var sArray = Array.from(s);
    var capitalAlphabet = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var smallAlphabet = ["a", "b", "c", "d", "e", "f", "g",
        "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < s.length; i++) {
        if(sArray[i] == ' ')
        {
            answer.push(' ');
            continue;
        }

        for (var j = 0; j < capitalAlphabet.length; j++) {
            if (sArray[i] == capitalAlphabet[j]) {
                var index = n;

                if (j + n == capitalAlphabet.length) {
                    index = 0;
                }
                else if (j + n > capitalAlphabet.length) {
                    index = j + n - capitalAlphabet.length;
                }
                else {
                    index = j + n;
                }

                answer.push(capitalAlphabet[index]);
                break;
            }
            
        }

        for (var k = 0; k < smallAlphabet.length; k++) {
            if (sArray[i] == smallAlphabet[k]) {
                var index = n;

                if (k + n == smallAlphabet.length) {
                    index = 0;
                }
                else if (k + n > smallAlphabet.length) {
                    index = k + n - smallAlphabet.length;
                }
                else {
                    index = k + n;
                }

                answer.push(smallAlphabet[index]);
                break;
            }            
        }
    }

    return answer.join("");
}