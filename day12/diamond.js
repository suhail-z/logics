let n=8;
for(i=0;i<n;i++){
    let str='';
    for(j=0;j<n;j++)
        if(i<(n/2)){
            if(j<n-i)
                str+=' ';
            else
            str+=' *  ';
        }
        console.log(str);
        
}