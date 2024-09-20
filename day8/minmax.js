let a=[3,9,8,1,2];
for(i=0;i<a.length;i++){
    for(j=i;j,a.length;j++)
        if(a[i]>a[j]){
            let t=a[i];
            a[i]=a[j]
            a[j]=t;
        }
}
console.log(a);
console.log('min'+a[0]);
console.log('max'+a[a.length-1]);

