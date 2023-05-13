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
  [
    `//Follow these steps to configure the widget Add the Customer Registration JS in header section.
    
    <script src=https://auth.lrcontent.com/v2/LoginRadiusV2.js  type='text/javascript' ></script>`,

    `// Copy the code below and paste it before the </head> tag. If you already added that code then skip this step.

    <script> 
var commonOptions = {};
commonOptions.apiKey = '<APIKEY>';
commonOptions.appName = '<APPNAME>';commonOptions.debugMode=true;commonOptions.verificationEmailTemplate='pawan.dixit@loginradius.com';commonOptions.verificationUrl='pawan.dixit@loginradius.com';
var  LRObject = new LoginRadiusV2(commonOptions);
</script>
    `,

    `
    // Copy the code below and paste it before the </head> tag.
    
    var registration_options = {}
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


// Copy the code below and paste it after the <body> tag. Place it where you want the widget to display on your web page.

<div id="registration-container"></div>`]
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
  [
    `// Follow these steps to configure the widget Add the Customer Registration JS in header section.
    
    <script src=https://auth.lrcontent.com/v2/LoginRadiusV2.js  type='text/javascript' ></script>
    `,

    `
    // Copy the code below and paste it before the </head> tag. If you already added that code then skip this step.

    <script> 
var commonOptions = {};
commonOptions.apiKey = '<APIKEY>';
commonOptions.appName = '<APPNAME>';commonOptions.debugMode=true;
var  LRObject = new LoginRadiusV2(commonOptions);
</script>
    
    `,

    `// Copy the code below and paste it before the </head> tag.
    
    var login_options = {};
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
    `,
    `// Copy the code below and paste it after the <body> tag. Place it where you want the widget to display on your web page.
    <div id="login-container"></div>`]


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
  [`//Follow these steps to configure the widget Add the Customer Registration JS in header section.

  <script src=https://auth.lrcontent.com/v2/LoginRadiusV2.js  type='text/javascript' ></script>`,

    `// Copy the code below and paste it before the </head> tag. If you already added that code then skip this step.

<script> 
var commonOptions = {};
commonOptions.apiKey = '<APIKEY>';
commonOptions.appName = '<APPNAME>';commonOptions.debugMode=true;
var  LRObject = new LoginRadiusV2(commonOptions);
</script>`,
    `
  // Copy the code below and paste it before the </head> tag.

  <script>
var forgotpassword_options = {};
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
  </script>
  
  // Copy the code below and paste it after the <body> tag. Place it where you want the widget to display on your web page.
  
  <div id="forgotpassword-container"></div>`
  ]
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
  [

    `
    // Follow these steps to configure the widget Add the Customer Registration JS in header section.
    
    <script src=https://auth.lrcontent.com/v2/LoginRadiusV2.js  type='text/javascript' ></script>
    `,

    `
    // Copy the code below and paste it before the </head> tag. If you already added that code then skip this step.

    <script> 
var commonOptions = {};
commonOptions.apiKey = '<APIKEY>';
commonOptions.appName = '<APPNAME>';commonOptions.debugMode=true;
var  LRObject = new LoginRadiusV2(commonOptions);
</script>
    
    `,


    `
// Copy the code below and paste it before the </head> tag.
  
  var resetpassword_options = {};
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
  
  // Copy the code below and paste it after the <body> tag. Place it where you want the widget to display on your web page.
  
  
  <div id="resetpassword-container"></div>`]
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
  [

    `
    // Follow these steps to configure the widget Add the Customer Registration JS in header section.

    <script src=https://auth.lrcontent.com/v2/LoginRadiusV2.js  type='text/javascript' ></script>

    `,
    `
// Copy the code below and paste it before the </head> tag. If you already added that code then skip this step.

<script> 
var commonOptions = {};
commonOptions.apiKey = '<APPKEY>';
commonOptions.appName = '<APPNAME>';commonOptions.debugMode=true;
var  LRObject = new LoginRadiusV2(commonOptions);
</script>

`,

    `
  // Copy the code below and paste it before the </head> tag.
  
  var verifyemail_options = {};
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
  });`]
);


(async () => {
  await manager.train();
  manager.save(path.join(__dirname, "../../out/utilities/model.nlp"));
})();
