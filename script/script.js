import da from './command.js';

import { datt, timee } from './modules/date.js';

const data = da;

document.getElementById("send").addEventListener("click", () => {
  send();
});

document.addEventListener("keypress", (e) => {
  if (e.key == 'Enter') {
    send();
  }
});

function Reply(command) {
 
  if (command == "clear") {
    document.getElementById('chatbox').innerHTML = "";
  } 
  else {
    let stat="normal";
    let response = "";

    // Check for intent match and get response
    for (const intent in data.intents) {
      const pattern = new RegExp(data.intents[intent].pattern, "i");
      if (pattern.test(command)) {
        response = data.intents[intent].responses[Math.floor(Math.random() * data.intents[intent].responses.length)];
        stat="normal";
        break;
      }
    }

    // If no intent match is found, return the default response
    for(var def in data.definition){
      const pattern = new RegExp(data.definition[def].pattern, "i");
      if (pattern.test(command)) {
        response = data.definition[def].reply;
        if(data.definition[def].image==null){
          stat="normal";
        }
        else{
          stat="def";
        }
        break;
      }
    }
    if (response === "") {
      response = data.defaultResponses[Math.floor(Math.random() * data.defaultResponses.length)];
    }

    // Handle special commands
    if (command.slice(0, 6) === "execute") {
      const code = command.slice(8);
      response = eval(code);
    } else if (command.slice(0, 4) === "date") {
      response = datt;
    } else if (command.slice(0, 4) === "time") {
      response = timee;
    }
    if(stat=="normal"){
      const cont = document.getElementById('chatbox');
      const box = document.createElement('div');
      box.setAttribute("id", "bcmd");
      const text = document.createElement('div');
      text.setAttribute("id", "botc");
      text.textContent = response;
      box.appendChild(text);
      cont.appendChild(box);
      const div = document.getElementById('chat');
      div.scrollTop = div.scrollHeight;
    }
    else if(stat=="def"){
      const cont = document.getElementById('chatbox');
      const box = document.createElement('div');
      box.setAttribute("id", "bcmd");
      const text = document.createElement('div');
      text.setAttribute("id", "defc");
      const timg=document.createElement("div");
      const img=document.createElement("img")
      img.setAttribute("src","../Assets/dbms.jpeg");
      timg.setAttribute("id","timg");
      timg.appendChild(img);
      const ttext=document.createElement("div");
      ttext.setAttribute("id","ttext");
      ttext.textContent=response;
      text.appendChild(timg);
      text.appendChild(ttext);
      box.appendChild(text);
      cont.appendChild(box);
      const div = document.getElementById('chat');
      div.scrollTop = div.scrollHeight;
    }
   
  }

  document.getElementById('command').value = "";
}

function send() {
  const cd = document.getElementById("command").value;

  if (cd !== "") {
    const cont = document.getElementById('chatbox');
    const box = document.createElement('div');
    box.setAttribute("id", "ucmd");
    const text = document.createElement('div');
    text.setAttribute("id", "uc");
    text.textContent = cd;
    box.appendChild(text);
    cont.appendChild(box);
    const cmd = cd.toLowerCase();
    Reply(cmd)
  } else {
    alert('Please enter a command.');
  }
}
