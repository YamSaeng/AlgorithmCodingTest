function solution(n, m, sections) {
    let answer = 0; // 페인트 칠한 개수
    let painting = 0; // 현재까지 칠한 구역

    for (let i = 0; i < sections.length; i++)
    {
        // 현재 칠해야할 구역이 현재까지 칠한 구역 보다 크면
        if (sections[i] > painting) {
            // 구역을 칠하고 현재까지 칠한 구역을 업데이트한다.
            painting = sections[i] + m - 1;
            // 페인트를 칠했으니 증가시킨다.
            answer++;
        }        
    }

    return answer;
}