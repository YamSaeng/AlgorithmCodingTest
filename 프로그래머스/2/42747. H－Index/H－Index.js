function solution(citations) {
    var answer = 0;

    citations.sort((a, b) => b - a);

    const length = citations.length;
    for (let i = 0; i < length; i++) {
        if (citations[i] >= i + 1) {
            answer = i + 1;
        }    
    }

    return answer;
}