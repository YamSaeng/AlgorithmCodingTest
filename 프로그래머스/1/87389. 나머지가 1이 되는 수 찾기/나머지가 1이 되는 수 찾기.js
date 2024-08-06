function solution(n) {
   var answer = 99999999;    

for (var i = 1; i < n; i++)
{
    if(n % i == 1)
        {
            if(i < answer)
                {
                    answer = i;        
                }          
        }
}

return answer;
}

console.log(solution(12));