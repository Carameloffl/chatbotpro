/* Concept for a simple animated menu

   ALERT: MESSY CODE!!!
*/


window.onload = function() {
	bombMenu_init();
  chatbot();

};

/* menu animation */
function bombMenu_init() {
	var toggleMenuBtns = document.getElementsByClassName("menu-toggle-btn");
	for(var i = 0; i < toggleMenuBtns.length; i++)  {
		toggleMenuBtns[i].onclick = expand;		/* attach an event handler to every menu-toggle-btn in the page */
	}
	
	function expand(e) {
		e.target.classList.toggle("active");	/* show/hide menu through class 'active' */
	}
}

/* Utility: just in case more than one menu is needed - shorthand for for loops */
function forEach(nodeList, callback) {
	for(var i = 0; i < nodeList.length; i++) {
		callback.call(nodeList[i]);
	}
}
function chatbot(){
const btnIconChat = document.querySelector('.chat');
const mainChat = document.querySelector('.wrap__chat--main');
const closeIcon = document.querySelector('.chat__icon--close');
const elementSendInput = document.querySelector('.message__send--input');
const listMessage = document.querySelector('.list__message');
const messageSendBtn = document.querySelector('.message__send--btn');
const wrapMessageList = document.querySelector('.wrap__message--list');

let messageStartBot = 'Let me know if you have any questions';
let variableBot = [
  {
    id: 1,
    message: 'Command 1',
    action: ''
  },
  {
    id: 2,
    message: 'Command 2',
    action: ''
  },
  {
    id: 3,
    message: 'Command 3',
    action: ''
  }
];
let countBot = 0;
let countVariableBot = 0;


const startBotsMessage = () => {
  const message = document.createElement('div');
  message.className = 'message__bot';
  message.innerHTML = messageStartBot;
  listMessage.append(message);
}

const messageBotVariable = (option) => {
  variableBot.forEach( (item) => {
    let messageDinamic = document.querySelector('.message__bot');
    if(option) {
      if(messageDinamic) {
        let messageDinamicDescription = '<div ' + 'id=' + item.id +  ' class="variable__message">' + item.message + '</div>';
        messageDinamic.insertAdjacentHTML('afterend', messageDinamicDescription );
      }
    }
  });
};


const botMessageAction = () => {
  const variableMessage = document.querySelectorAll('.variable__message');
  variableMessage.forEach( (item) => {
    let idElement = Number(item.getAttribute('id'));
  });
}

const openChat = () => {
  mainChat.style.height = '430px';
  mainChat.style.width = '310px';
  btnIconChat.style.display = 'none'

  countBot = countBot + 1;
  countBot > 1  ? null : startBotsMessage();
  
  countVariableBot = countVariableBot + 1;
  countVariableBot > 1 ? messageBotVariable(false) :  messageBotVariable(true);
  messageBotVariable();
  botMessageAction();
}

const closeChat = () => {
  mainChat.style.height = '0';
  mainChat.style.width = '0'
  btnIconChat.style.display = 'flex'
}

const messageSend = () => {
  let message = '';
  elementSendInput.value;
 
  
  if(elementSendInput.value === '') {
    return false;
  }

  let messageCreate = document.createElement('div');
    messageCreate.className = "message__author";
    messageCreate.innerHTML = elementSendInput.value;;
    listMessage.append(messageCreate);
    elementSendInput.value = '';
    wrapMessageList.scrollTop = wrapMessageList.scrollHeight;
}


btnIconChat.addEventListener('click', openChat);
closeIcon.addEventListener('click', closeChat);
messageSendBtn.addEventListener('click', messageSend);
elementSendInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
     messageSend();
  }
})
setTimeout(openChat, 5000);

}

