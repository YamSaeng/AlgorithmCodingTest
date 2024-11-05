function sumFunc(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function solution(elements) {
    const answer = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {            
            if (j + i > elements.length) {
                let sliceEndArr = elements.slice(j, elements.length);
                let sliceEndNextArr = elements.slice(0, j + i - elements.length);

                answer.add(sumFunc(sliceEndArr) + sumFunc(sliceEndNextArr));
            }
            else {
                let commonSliceArr = elements.slice(j, j + i);

                answer.add(sumFunc(commonSliceArr));
            }
        }
    }

    return answer.size;
}
