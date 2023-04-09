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
        "pattern": "(what's ds|ds|what's the data structures|definition of ds|data structures)",
        "reply":"Data structures are ways of organizing and storing data in a computer program or system. They provide a way to efficiently manage and manipulate large amounts of data, allowing for faster access and processing of information. Common examples of data structures include arrays, linked lists, stacks, queues, trees, and graphs Each type of data structure has its own set of operations that can be performed on it, such as adding, removing, or accessing elements. The choice of data structure often depends on the specific requirements of a program or algorithm, as well as the characteristics of the data being stored. Efficient use of data structures is critical for creating high-performance software systems that can handle large volumes of data efficiently.",
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
