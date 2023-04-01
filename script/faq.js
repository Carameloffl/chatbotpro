var box=document.getElementById("faq-side-but");
var status="hidden";
box.addEventListener("click",()=>{
    if(status=="hidden"){
        document.getElementById("faq-box").style=" grid-template-rows: 30% 70%;height:40%; transition:height 1s";
        window.setTimeout(()=>{
            document.getElementById("faq-ans").style="display:flex;";
        },300);
       
        status="visibile";
    }
    else if(status=="visibile"){
        document.getElementById("faq-box").style=" grid-template-rows: 100% 0%;height:20%; transition:height 1s";
      
            document.getElementById("faq-ans").style="display:none";
     
        status="hidden";
    }

})
console.log(box);