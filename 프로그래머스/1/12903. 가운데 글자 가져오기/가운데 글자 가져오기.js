function solution(s) {
    var answer = '';

var middleIndex = 0;
var sLength = s.length;

if (sLength % 2 == 1) {
    middleIndex = Math.floor(sLength / 2);    

    answer = s[middleIndex];
}

if (sLength % 2 == 0) {
    middleIndex = Math.floor(sLength / 2) - 1;

    answer = s[middleIndex];
    answer += s[middleIndex + 1];
}   

return answer;
}