function solution(arr) {
    var answer = [];
    
    var Index = 0;
    var Max = 99999999;    
    
    for(var i =0;i<arr.length;i++)
    {
        if(arr[i] < Max)
        {
            Max = arr[i];
            Index = i;        
        }
    }
    
    for(var i=0;i<arr.length;i++)
    {
        if(Index != i)
        {
            answer.push(arr[i]);        
        }
    }
        
    if(answer.length == 0)
    {        
        answer.push(-1);
    }
    
    
    return answer;
}