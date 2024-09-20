let a=[5,1,2,3,6,8,7];
let m1=-Infinity,m2=-Infinity;
for(i=0;i<a.length;i++){
    if(m1<a[i]){
m2=m1;
m1=a[i];
    }
else if(a[i]>m2 && a[i]<m1)
    m2=a[i];

}
console.log(m2);
