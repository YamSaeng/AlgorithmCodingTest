function solution(numbers) {
   var answer = 0;
var Find;

for (var i = 0; i < 10; i++) {        
    Find = false;
    var CheckNumber = i;
    for (var j = 0; j < 10; j++) {
        if (CheckNumber == numbers[j]) {
            Find = true;
        }
    }

    if (!Find) {
        answer += CheckNumber;
    }
}

return answer;
}