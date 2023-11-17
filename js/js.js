var left=1;
var right=6;

function show() {
    for(i=left; i<=right; i++) {
        document.getElementById("slaider" +i).style.display="inline-block";
    }
}

function moveLeft() {
    if(left<=1 && right<=5)
    {
        document.getElementById("slaider"+left).style.display="none";
        left+=1;
        right+=1;
    
        for(i=left;i<=right;i++)
        {
            document.getElementById("slaider" +i).style.display="inline-block";
        }
    }
    else
        return;

}

function moveRight() {
    if(left>=2 && right>=6)
    {
        document.getElementById("slaider"+right).style.display="none";
        left-=1;
        right-=1;
    
        for(i=left;i<=right;i++)
        {
            document.getElementById("slaider" +i).style.display="inline-block";
        }
    }
    else
        return;

}
