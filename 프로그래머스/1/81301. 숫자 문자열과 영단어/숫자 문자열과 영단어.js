function solution(s) {
    var answer = [];

    let numbers = new Map();
    numbers.set("zero", 0); numbers.set("one", 1); numbers.set("two", 2); numbers.set("three", 3); numbers.set("four", 4);
    numbers.set("five", 5); numbers.set("six", 6); numbers.set("seven", 7); numbers.set("eight", 8); numbers.set("nine", 9);

    let NumberString = [];

    for (let i = 0; i < s.length; i++) {
        NumberString.push(s[i]);

        let NumberStringKey = NumberString.join("");
        
        if(isNaN(parseInt(NumberStringKey)) != true)
        {
            answer.push(parseInt(NumberStringKey));
            NumberString = [];            
        }
        else if (numbers.get(NumberStringKey) != null) {
            answer.push(numbers.get(NumberStringKey));
            NumberString = [];
        }        
    }   

    return parseInt(answer.join(""));
}