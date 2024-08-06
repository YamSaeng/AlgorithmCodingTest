function solution(num1, num2) {
     // 자바스크립트에서는 자동으로 형변환해서 소수 계산을 하므로
     // floor를 통해 소수점 뒷자리를 버려줘야함
    return Math.floor(num1 / num2);
}