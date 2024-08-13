function solution(s) {
    var answer = 0;

    let numbers = new Map();
    numbers.set("zero", 0); numbers.set("one", 1); numbers.set("two", 2); numbers.set("three", 3); numbers.set("four", 4);
    numbers.set("five", 5); numbers.set("six", 6); numbers.set("seven", 7); numbers.set("eight", 8); numbers.set("nine", 9);

    let TempNumberString = [];
    let TempNumber = [];
    for (let i = 0; i < s.length; i++) {
        TempNumberString.push(s[i]);
        let TempNumberStringKey = TempNumberString.join("");
        
        if(isNaN(parseInt(TempNumberStringKey)) != true)
        {
            TempNumber.push(parseInt(TempNumberStringKey));
            TempNumberString = [];            
        }
        else if (numbers.get(TempNumberStringKey) != null) {
            TempNumber.push(numbers.get(TempNumberStringKey));
            TempNumberString = [];
        }        
    }

    answer = parseInt(TempNumber.join(""));

    return answer;
}