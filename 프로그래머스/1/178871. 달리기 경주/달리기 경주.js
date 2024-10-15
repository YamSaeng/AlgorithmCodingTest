function solution(players, callings) {
    let answer = {};

    // player들의 이름을 key값으로, index를 value로 해서 담아둠
    for (let i = 0; i < players.length; i++) {
        answer[players[i]] = i;
    }

    for (let i = 0; i < callings.length; i++) {
        const index = answer[callings[i]];
        const temp = players[index - 1];

        // 해당 index와 이전 index의 value 값을 바꿈
        players[index - 1] = callings[i];
        players[index] = temp;

        // answer의 index도 갱신
        answer[callings[i]] = index - 1;
        answer[temp] = index;
    }

    return players;
}