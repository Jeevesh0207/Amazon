
setInterval(function(){
    let a=document.getElementById("headernavbar")
    let c=document.getElementById("scrollid")
    let d=document.body.offsetWidth
    if(c.scrollTop>0 && d>=838){
        a.style.top="2%"
    }
    else{
        a.style.top="0%"
    }
    
})



