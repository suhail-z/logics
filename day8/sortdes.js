let a=[6,4,7,2,5];
for(i=0;i<a.length;i++){
    for(j=i;j<a.length;j++){
        if(a[i]<a[j]){
            let t=a[i];
            a[i]=a[j];
            a[j]=t;
        }
    }
}
console.log(a);