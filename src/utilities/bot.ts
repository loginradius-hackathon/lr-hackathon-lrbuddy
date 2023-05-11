import { NlpManager } from "node-nlp";
import * as path from "path";
const manager = new NlpManager({ languages: ["en"] });
// Adds the utterances and intents for the NLP
manager.addDocument("en", "How I can signup in LR?", "agent.signup");
manager.addDocument("en", "Code to Register", "agent.signup");
manager.addDocument("en", "Code to Account Registration", "agent.signup");
manager.addDocument("en", "Code to User sign-on", "agent.signup");
manager.addDocument("en", "Code to User creation", "agent.signup");
manager.addDocument("en", "Code to Account creation", "agent.signup");


// Train also the NLG
manager.addAnswer(
  "en",
  "agent.signup",
  `var registration_options = {}
registration_options.onSuccess = function(response) {
//On Success
console.log(response);
};
registration_options.onError = function(errors) {
//On Errors
console.log(errors);
};
registration_options.container = "registration-container";
LRObject.util.ready(function() {
LRObject.init("registration",registration_options);
})

Container

<div id="registration-container"></div>`
);

manager.addDocument("en", "How I can signin in LR?", "agent.signin");
manager.addDocument("en", "code to login?", "agent.signin");
manager.addDocument("en", "code to Authentication?", "agent.signin");

// sign in
manager.addAnswer(
  "en",
  "agent.signin",
  `var login_options = {};
  login_options.onSuccess = function(response) {
  //On Success
  console.log(response);
  };
  login_options.onError = function(errors) {
  //On Errors
  console.log(errors);
  };
  login_options.container = "login-container";
  
  LRObject.util.ready(function() {
  LRObject.init("login",login_options);
  })
  
  container
  
  <div id="login-container"></div>`
);


(async () => {
  await manager.train();
  manager.save(path.join(__dirname, "../../out/utilities/model.nlp"));
})();
