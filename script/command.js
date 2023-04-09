export const data ={
    "intents": [
      {
        "tag": "greeting",
        "pattern": "(hi|hello|hey)",
        "responses": [
          "Hello! How can I assist you today?",
          "Hey there, how can I help?",
          "Hi! What can I do for you?"
        ]
      },
      {
        "tag": "goodbye",
        "pattern": "(bye|goodbye)",
        "responses": [
          "Goodbye!",
          "Have a great day!",
          "See you later!"
        ]
      },
      {
        "tag": "weather",
        "pattern": "(what's the weather like|how's the weather|what's the temperature|what's it like outside)",
        "responses": [
          "I'm not sure, would you like me to check for you?",
          "It's currently 72 degrees and sunny.",
          "I'm sorry, I don't have access to weather information."
        ]
      }
    ],
    "defaultResponses":[
      "I'm not sure about this.",
      "say something else bro"
    ],
    "definition":[
      {
        "pattern": "(what's dbms|dbms|what's the database|definition of dbms)",
        "reply":"DBMS stands for Database Management System, and it is a software system that allows users to define, create, manage, and access databases. A database is a collection of data that is organized in a specific way to facilitate easy access and management of the data.A DBMS provides a means to store, organize, retrieve, and manipulate data in a database.",
        "image":"dbms.jpeg"
        
      },
      {
        "pattern": "(what's os|os|what's the operating system|definition of os)",
        "reply":"An Operating System (OS) is a software system that manages computer hardware and software resources and provides common services for computer programs. It is a layer of software that sits between the application software and the computer hardware and enables the two to communicate and interact with each other.",
        "image":null
      }
    ]
  }
  
  export default data;
