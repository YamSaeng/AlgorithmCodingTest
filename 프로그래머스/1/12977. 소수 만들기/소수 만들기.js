function solution(nums) {
    var answer = 0;

    for (let i = 0; i < nums.length; i++)
    {
        for (let j = i + 1; j < nums.length; j++)
        {
            for (let k = j + 1; k < nums.length; k++)
            {
                let sum = nums[i] + nums[j] + nums[k];
                let isPrime = true;

                for (let l = 2; l < sum / 2; l++) {
                    if (sum % l == 0) {
                        isPrime = false;
                        break;
                    }
                }

                if (isPrime == true) {
                    answer++;
                }
            }
        }
    }

    return answer;
}