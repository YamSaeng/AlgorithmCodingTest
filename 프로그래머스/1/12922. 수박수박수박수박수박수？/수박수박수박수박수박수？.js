function solution(n) {
     var answer = [];    

 for (var i = 1; i < n + 1; i++) {
     if (i % 2 != 0) {
         answer.push("수");
     }

     if (i % 2 == 0) {
         answer.push("박");
     }      
 }    

 return answer.join('');
}