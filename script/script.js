import da from './command.json' assert {type: 'JSON'};
import {datt,timee} from './modules/date.js';
var data=da;

document.getElementById("send").addEventListener("click",()=>{
    send();
})
document.addEventListener("keypress",(e)=>{if(e.key=='Enter'){send()}});

function Reply(command){
    if(command=="clear"){
        document.getElementById('chatbox').innerHTML="";
    }
    else{
    var cont=document.getElementById('chatbox');
    var box=document.createElement('div');
    box.setAttribute("id","bcmd");
    var text=document.createElement('div');
    text.setAttribute("id","botc");
    if((command[0]+command[1]+command[2]+command[3]+command[4]+command[5]+command[6])=="execute"){
        var ex="";
        for(var i=8;i<command.length;i++){
            ex+=command[i];
        }
        text.textContent=eval(ex);
    }
    else if((command[0]+command[1]+command[2]+command[3])=="date"){
        text.textContent=datt;
    }
    else if((command[0]+command[1]+command[2]+command[3])=="time"){
        text.textContent=timee;
    }
    else if(data[command]!=undefined){
        text.textContent=data[command];
    }
    else{
        text.textContent="I'm sorry, I don't have the answer to that. Can you please ask me something else?";
    }
   
    box.appendChild(text);
    cont.appendChild(box);
    var div=document.getElementById('chat');
    div.scrollTop=div.scrollHeight;
    }
    document.getElementById('command').value="";
  
}
function send(){
    var cd=document.getElementById("command").value;
    
    if(cd!=""){
        var cont=document.getElementById('chatbox');
        var box=document.createElement('div');
        box.setAttribute("id","ucmd");
        var text=document.createElement('div');
        text.setAttribute("id","uc");
        text.textContent=cd;
        box.appendChild(text);
        cont.appendChild(box);
        var cmd=cd.toLowerCase();
        Reply(cmd)
    }
   else{
       alert('write any command');
   }
}
