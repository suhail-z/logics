let a=[3,4,3,6,4,4,6,8];
let r=[],c=0;

for(i=0;i<a.length;i++)
{
    if(r.includes(a[i])==0)
    {
        c=0;
        r.push(a[i]);
        for(j=i;j<a.length;j++)
            if(a[i]==a[j])
                c++;
                console.log(a[i]+'---->'+c);
                
    }
}