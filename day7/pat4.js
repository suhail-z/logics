
let n=4;

for(i=0;i<n;i++)
    {
        let str='';
        for(j=0;j<n;j++)
           {
            if(j<i)
                str+=' '
            else 
            str+='*'
           }
        console.log(str);
        
    }