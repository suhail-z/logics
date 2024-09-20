for(i=0;i<4;i++)
{
    let v=2;
    let str='';
    for(j=0;j<4;j++)
    {
        if(j<3-i)
            str+='  ';
        else
        {
            str=v+' ';
            v+=2;
        }
    }
}