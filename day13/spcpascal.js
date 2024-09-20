let n=4,r=n-1;
for(i=0;i<n;i++){
    let str=' ';
    for(j=0;j<n;j++){
        if(j<r-1)
            str+=" ";
else if(j==r-i || j==r || i==r)
    str+=' *  ';
else
str=='  ';
    }
    console.log(str);
    
}