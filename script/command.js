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
    ]
  }

  export default data;
