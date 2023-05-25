
setInterval(function(){
    let a=document.getElementById("headernavbar")
    let c=document.getElementById("scrollid")
    if(c.scrollTop>0){
        a.style.top="2%"
    }
    else{
        a.style.top="0%"
    }
    
})



