function solution(number, limit, power) {
    let totalSum = 0;

    for (let i = 1; i <= number; i++)
    {
        let sum = 0;
        
        for (let j = 1; j <= Math.sqrt(i); j++)
        {
            if (i % j == 0)
            {
                if (i / j == j)
                {
                    sum += 1;
                }
                else
                {
                    sum += 2;
                }
            }

            if (sum > limit) {
                sum = power;
                break;
            }
        }

        totalSum += sum;
    }

    return totalSum;
}