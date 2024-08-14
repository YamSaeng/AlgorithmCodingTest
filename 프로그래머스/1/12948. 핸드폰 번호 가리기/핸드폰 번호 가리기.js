function solution(phone_number) {
   var answer = Array.from(phone_number);        

   for (var i = 0; i < phone_number.length - 4; i++) {
        answer[i] = "*";
   }

   return answer.join('');
}