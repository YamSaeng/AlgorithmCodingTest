function solution(today, terms, privacies) {
    const answer = [];

    // 들어온 today를 Date형식으로 바꾼다
    const expireDay = new Date(today);

    const termArray = {};
    terms.forEach((item) => {
        // split() 메서드로 분리한 타입과 기간을
        // 구조 분해 할당으로 변수화 한다.
        const [type, term] = item.split(" ");

        // 타입에 기간이 얼만지 객체로 생성한다.    
        termArray[type] = Number(term);
    });

    // 개인정보 수집일자를 확인한다.
    privacies.forEach((item, index) => {
        // 위와 마찬가지로 구조 분해 할당을 한다.
        const [date, type] = item.split(" ");

        // 구한 date는 new Date() 메서드를 통해 Date 형식으로 변환한다.
        const newDate = new Date(date);

        // 그리고 Date의 매서드인 setMonth를 이용해
        // chDate의 현재 달 + 타입의 기간을 더한 값을 구한다.
        newDate.setMonth(newDate.getMonth() + termArray[type]);

        // 마지막으로 오늘 날짜와 구한 유효기간을 비교해
        // 유효기간이 오늘 보다 작거나 같으면 answer에 번호를 넣는다.
        if (newDate <= expireDay) {
            answer.push(index + 1);
        }
    });

    return answer;
}
