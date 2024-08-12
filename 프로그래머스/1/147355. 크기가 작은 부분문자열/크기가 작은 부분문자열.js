function solution(t, p) {
    var answer = 0;
    
    var pLength = p.length;
    
    var pNumber = parseInt(p);

    for (var i = 0; i < t.length - pLength + 1; i++) {
        var sliceTNumber = parseInt(t.substr(i, pLength));
        
        if(pNumber >= sliceTNumber)
        {
            answer++;
        }        
    }  

    return answer;
}