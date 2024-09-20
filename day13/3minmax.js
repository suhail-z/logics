let a=[5,1,2,3,6,8,7];
let m1=-Infinity,m2=-Infinity,m3=-Infinity;
for(i=0;i<a.length;i++){
    if(m1<a[i]){
m3=m1;
m2=m1;
m1=a[i];
    }
else if(a[i]>m2 && a[i]<m1)
   {
    m3=m2;
  m2=a[i]; } 
  else if(a[i]>max3 && a[i]<m2)
m3=a[i];

  if(min1>a[i]){
    min3=min2;
    min2=min1;
    min1=a[i];

  }
  else if (a[i]<min2 && a[i]>min1){
    min3=min2;
    min2=a[i];
  }
  else if(a[i],min3 && a[i]>min2)
    min3=a[i];
}

