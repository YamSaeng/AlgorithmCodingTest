function solution(ingredient) {
    var answer = 0;

    let ingredients = [];

    for (let i = 0; i < ingredient.length; i++) {
        ingredients.push(ingredient[i]);

        if (ingredients.length >= 4
            && ingredients[ingredients.length - 1] == 1
            && ingredients[ingredients.length - 2] == 3
            && ingredients[ingredients.length - 3] == 2
            && ingredients[ingredients.length - 4] == 1) {

            answer++;
            ingredients.pop(); // 1
            ingredients.pop(); // 3
            ingredients.pop(); // 2
            ingredients.pop(); // 1
        }
    }

    return answer;
}