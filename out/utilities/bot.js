"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_nlp_1 = require("node-nlp");
const path = require("path");
const manager = new node_nlp_1.NlpManager({ languages: ["en"] });
// Adds the utterances and intents for the NLP
manager.addDocument("en", "How I can signup in LR?", "agent.signup");
manager.addDocument("en", "Code to Register", "agent.signup");
manager.addDocument("en", "Code to Account Registration", "agent.signup");
manager.addDocument("en", "Code to User sign-on", "agent.signup");
manager.addDocument("en", "Code to User creation", "agent.signup");
manager.addDocument("en", "Code to Account creation", "agent.signup");
// Train also the NLG
manager.addAnswer("en", "agent.signup", `var registration_options = {}
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

<div id="registration-container"></div>`);
manager.addDocument("en", "How I can signin in LR?", "agent.signin");
manager.addDocument("en", "code to login?", "agent.signin");
manager.addDocument("en", "code to Authentication?", "agent.signin");
// sign in
manager.addAnswer("en", "agent.signin", `var login_options = {};
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
  
  <div id="login-container"></div>`);
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield manager.train();
    manager.save(path.join(__dirname, "../../out/utilities/model.nlp"));
}))();
//# sourceMappingURL=bot.js.map