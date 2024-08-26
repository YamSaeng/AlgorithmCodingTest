function solution(cards1, cards2, goal) {
    let indexCard1 = 0;
    let indexCard2 = 0;

    for (let i = 0; i < goal.length; i++) {
        if (cards1[indexCard1] == goal[i]) {
            indexCard1++;
        }
        else if (cards2[indexCard2] == goal[i]) {
            indexCard2++;
        }
        else {
            return "No";
        }
    }

    return "Yes";
}