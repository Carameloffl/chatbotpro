var status="hidden";
function cal(a){
  
    if(status=="hidden"){
        document.getElementById("faq-box"+a).style=" grid-template-rows: 30% 70%;height:38%; transition:height 1s";
        window.setTimeout(()=>{
            document.getElementById("faq-ans"+a).style="display:flex;";
        },300);
       
        status="visibile";
    }
    else if(status=="visibile"){
        document.getElementById("faq-box"+a).style=" grid-template-rows: 100% 0%;height:20%; transition:height 1s";
      
            document.getElementById("faq-ans"+a).style="display:none";
     
        status="hidden";
    }
}