function solution(s) {
   var array = Array.from(s);

array.sort();
array.reverse();

return array.join('');
}