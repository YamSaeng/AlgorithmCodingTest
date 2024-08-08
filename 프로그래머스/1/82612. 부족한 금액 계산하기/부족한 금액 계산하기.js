function solution(price, money, count) {    

    var sum = 0;
    for(var i=1 ;i <= count;i++)
    {
        sum += (i * price);
    }
    
    var CalculateSum = sum - money;
    
    if(CalculateSum <= 0)
    {
        return 0;        
    }
    
    return CalculateSum;
}