let n=1000000001;
if(n==1)
    console.log('neither prime nor composite');
else if(n%2==0 || n%3==0 || n%5==0 || n%7==0)
    console.log(n+'is not a prime');
return ;
for(i=11;i*i<=n;i+=6)
    if(n%i==0 || n%(i+2)==0)
    {
        console.log(n+ 'is not a prime');
        return;
    }
    console.log(prime);
    
    