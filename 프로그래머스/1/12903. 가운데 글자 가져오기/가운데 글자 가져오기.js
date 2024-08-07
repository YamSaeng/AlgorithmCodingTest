function solution(s) {
    var answer = [];

var middleIndex = 0;
var sLength = s.length;

if (sLength % 2 == 1) {
    middleIndex = Math.floor(sLength / 2);    

    answer.push(s[middleIndex]);
}

if (sLength % 2 == 0) {
    middleIndex = Math.floor(sLength / 2) - 1;

    for (var i = middleIndex; i < middleIndex + 2; i++)
    {
        answer.push(s[i]);
    }
}   

return answer.join('');
}