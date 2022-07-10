function ArrayAverage(n,arr)
{
    var sum = 0;
    for (var i=0; i<n; i++)
    {
        sum+=arr[i];        
    }
    
    var Average = sum/n;
    return Average;
}

var arr = [1,2,3,4,5];
var n = arr.length;

var fun = ArrayAverage(5,arr);
console.log(fun);