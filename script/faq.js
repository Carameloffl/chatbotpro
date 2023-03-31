var box=document.getElementById("faq-side-but");
var status="hidden";
box.addEventListener("click",()=>{
    if(status=="hidden"){
        document.getElementById("faq-box").style=" grid-template-rows: 30% 70%;height:50%; transition:height 4s";
        document.getElementById("faq-ans").style="display:flex;transition:display 4s";
        status="visibile"
    }
    else if(status=="visibile"){
        document.getElementById("faq-box").style=" grid-template-rows: 100% 0%;height:20%; transition:height 4s";
        document.getElementById("faq-ans").style="display:none;transition:display 4s";
        status="hidden";
    }

})
console.log(box);