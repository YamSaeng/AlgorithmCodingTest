function solution(numbers) {
    var answer = 0;
    var numberslength = numbers.length;

    for (var i = 0; i < numberslength; i++) 
    {
        answer += numbers[i];
    }

    return answer / numberslength;
}