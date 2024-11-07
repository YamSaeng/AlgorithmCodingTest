function solution(citations) {
    var answer = 0;

    const length = citations.length;
    for (let i = 0; i < length; i++) {
        let hIndex = citations[i];

        let maxCount = 0;
        let minCount = 0;
        for (let j = 0; j < length; j++) {
            if (citations[j] >= hIndex) {
                maxCount++;
            } else if (hIndex >= citations[j]) {
                minCount++;
            }
        }

        if (hIndex == maxCount
            && hIndex >= minCount) {
            answer = hIndex;
        }
    }

    return answer;
}