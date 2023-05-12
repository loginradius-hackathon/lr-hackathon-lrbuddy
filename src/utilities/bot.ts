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

// sign in

manager.addDocument("en", "How I can signin in LR?", "agent.signin");
manager.addDocument("en", "code to login?", "agent.signin");
manager.addDocument("en", "code to Authentication?", "agent.signin");
manager.addDocument("en", "code to User login?", "agent.signin");
manager.addDocument("en", "code to User validation?", "agent.signin");
manager.addDocument("en", "code to Access request?", "agent.signin");


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
  
// ForgetPassword

manager.addDocument("en", "How I can Forgot Password in LR?", "agent.forgotpassword");
manager.addDocument("en", "code to Password reset?", "agent.forgotpassword");
manager.addDocument("en", "code to Password change request?", "agent.forgotpassword");
manager.addDocument("en", "code to Account reset?", "agent.forgotpassword");
manager.addDocument("en", "code to Password recovery assistance?", "agent.forgotpassword");
manager.addDocument("en", "code to Password reminder?", "agent.forgotpassword");


manager.addAnswer(
  "en",
  "agent.forgotpassword",
  [`var forgotpassword_options = {};
  forgotpassword_options.container = "forgotpassword-container";
  forgotpassword_options.onSuccess = function(response) {
  // On Success
  console.log(response);
  };
  forgotpassword_options.onError = function(errors) {
  // On Errors
  console.log(errors);
  }
  
  LRObject.util.ready(function() {
  LRObject.init("forgotPassword", forgotpassword_options);
  });
  
  container
  
  <div id="forgotpassword-container"></div>`,`<This is another snippet>`, `<This is third snippet>`]
  );

// ResetPassword

manager.addDocument("en", "How I can Change password in LR?", "agent.resetpassword");
manager.addDocument("en", "code to Update password?", "agent.resetpassword");
manager.addDocument("en", "code to Password Password modification?", "agent.resetpassword");
manager.addDocument("en", "code to Password change request?", "agent.resetpassword");
manager.addDocument("en", "code to Password reissue?", "agent.resetpassword");
manager.addDocument("en", "code to Password revalidation?", "agent.resetpassword");


manager.addAnswer(
  "en",
  "agent.resetpassword",
  `var resetpassword_options = {};
  resetpassword_options.container = "resetpassword-container";
  resetpassword_options.onSuccess = function(response) {
  // On Success
  console.log(response);
  };
  resetpassword_options.onError = function(errors) {
  // On Errors
  console.log(errors);
  }
  
  LRObject.util.ready(function() {
  LRObject.init("resetPassword", resetpassword_options);
  });
  
  container
  
  
  <div id="resetpassword-container"></div>`
  );

// VerifyEmail

manager.addDocument("en", "How I can verify email in LR?", "agent.verifyemail");
manager.addDocument("en", "code to email verification?", "agent.verifyemail");
manager.addDocument("en", "code to Email confirmation?", "agent.verifyemail");
manager.addDocument("en", "code to Email activation?", "agent.verifyemail");
manager.addDocument("en", "code to Email acknowledgement?", "agent.verifyemail");
manager.addDocument("en", "code to Email validation check?", "agent.verifyemail");


manager.addAnswer(
  "en",
  "agent.verifyemail",
  `var verifyemail_options = {};
  verifyemail_options.onSuccess = function(response) {
  // On Success
  console.log(response);
  };
  verifyemail_options.onError = function(errors) {
  // On Errors
  console.log(errors);
  }
  
  LRObject.util.ready(function() {
  LRObject.init("verifyEmail", verifyemail_options);
  });`
  );


(async () => {
  await manager.train();
  manager.save(path.join(__dirname, "../../out/utilities/model.nlp"));
})();
