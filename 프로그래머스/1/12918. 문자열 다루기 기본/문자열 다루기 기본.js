function solution(s) {
    var answer = true;

    if (s.length == 4 || s.length == 6)
    {
        for (var i = 0; i < s.length; i++)
        {
            var number = parseInt(s[i]);

            if (isNaN(number) == true)
            {
                return false;
            }
        }
    }
    else
    {
        return false;
    }

    return answer;
}