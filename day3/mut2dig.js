let s=1;
let n=589432;
while(n>0){
    let r=n%100;
    s*=r;
    n=Math.floor(n/100);
     }console.log(s);
     