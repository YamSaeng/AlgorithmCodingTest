function solution(s){
    var answer = true;
    
    var pCount = 0;
    var yCount = 0;
    
    for(var i=0;i<s.length;i++)
    {
        if(s[i] == 'p' || s[i] == 'P')        
        {
            pCount++;        
        }
        
        if(s[i] == 'y' || s[i] == 'Y')
        {
            yCount++;        
        }
    }  
    
    if(pCount == yCount)
    {
        answer = true;    
    }
    else
    {
        answer = false;      
    }

    return answer;
}