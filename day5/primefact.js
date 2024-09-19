let n=72;
if(n%2==0)
    console.log('2');
else if(n%3==0)
    console.log('3');
    
for(i=5;i<=n;i+=6){
    if(n%i==0)
        console.log(i);
        
        else if(n%(i+2)==0)
            console.log(i+2);
            
    
}
    