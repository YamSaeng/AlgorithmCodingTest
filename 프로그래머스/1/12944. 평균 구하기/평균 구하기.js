function solution(arr) {
    var answer = 0;
    var arrLength = arr.length;
    
    for(var i=0;i<arrLength;i++)
    {
        answer += arr[i];        
    }
    
    return answer / arrLength;
}