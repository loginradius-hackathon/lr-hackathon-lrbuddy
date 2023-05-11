import { NlpManager } from "node-nlp";
import * as path from "path";
const manager = new NlpManager({ languages: ["en"] });
// Adds the utterances and intents for the NLP
manager.addDocument("en", "How I can signup in LR?", "agent.signup");
manager.addDocument("en", "Code to Register", "agent.signup");
manager.addDocument("en", "Code to Account Registration", "agent.signup");



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


(async () => {
  await manager.train();
  manager.save(path.join(__dirname, "../../out/utilities/model.nlp"));
})();
