function isOdd(num)
{
    if (num%2===1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var N=5;

for (var i=0; i<N; i++)
{
    console.log(isOdd(i));
}
