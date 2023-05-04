var inputbox=document.getElementById("inputbox");
var btn=document.querySelectorAll("button");
var val="";
btn.forEach((e)=>{
    e.addEventListener("click",(d)=>{
        if(d.target.innerHTML == "AC"){
           val="" 
        }
        else if(d.target.innerHTML == "="){
               val=eval(val)
        }
        else if(d.target.innerHTML == "DEL"){
             val=val.slice(0,val.length-1)
        }
        else{
            val+=d.target.innerHTML
        }
        inputbox.value=val
    })
})