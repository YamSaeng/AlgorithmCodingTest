function solution(number, k) {
    let numberArr = number.toString();  

    let answer = [];
    answer.push(numberArr[0]);  

    for (let i = 1; i < numberArr.length; i++) {
        let pushNumber = numberArr[i];

        while (pushNumber > answer[answer.length - 1] && k > 0) {         
            answer.pop();
            k--;
        }       

        answer.push(pushNumber);
    }

    // while 조건문에 걸리지 않으면 뒤에서 k 개수만큼 잘라낸다.
    answer.splice(numberArr.length - k, k);

    return answer.join("");   
}