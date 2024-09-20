let l=0,n=4;
for(i=0;i<n;i++){
    let str='';
    if(l<2)
        var p=' *';
    else{
        p=' #';
        if(l==3)
            l=-1;
    }
    for(j=0;j<n;j++)
        str+=p;
    console.log(str);
    l++
    
}