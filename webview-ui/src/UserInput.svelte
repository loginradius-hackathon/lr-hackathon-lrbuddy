<script lang="ts">
  import { provideVSCodeDesignSystem, vsCodeButton, vsCodeTextField } from "@vscode/webview-ui-toolkit";
  import { vscode } from "./utilities/vscode";
  import { onMount } from "svelte";
  import { msgStore } from "./store";
  let userInput;
  let random_placeholders =["Let's integrate LR :)", "Type 'clear' to clear chatbox", "type 'code for login' for login snippet", "type 'code for registration' for registration snippet"]
  let placeholder = random_placeholders[0];

  // In order to use the Webview UI Toolkit web components they
  // must be registered with the browser (i.e. webview) using the
  // syntax below.
  provideVSCodeDesignSystem().register(vsCodeButton(), vsCodeTextField());

  // To register more toolkit components, simply import the component
  // registration function and call it from within the register
  // function, like so:
  //
  // provideVSCodeDesignSystem().register(
  //   vsCodeButton(),
  //   vsCodeCheckbox()
  // );
  //
  // Finally, if you would like to register all of the toolkit
  // components at once, there's a handy convenience function:
  //
  // provideVSCodeDesignSystem().register(allComponents);
  function generateRandom(min, max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.ceil(rand * difference);
    rand = rand + min;
    return rand;
  }
  function handleHowdyClick() {
    console.log("inside handle howdy click")
    console.log({"user input": userInput.value})
    if(userInput.value?.toLowerCase().trim() === 'clear'){
      userInput.value =""
      $msgStore = [];
      return;
    }
    $msgStore = [...$msgStore,{by: 'user', msg: userInput.value}]
    vscode.postMessage({
      command: "user_msg",
      text: userInput.value,
    });
    userInput.value =""
  }
  let counter = 0;
  onMount(() => {
 
    userInput.onkeydown = function (e) {
    console.log("enter event called");
    e = e || window.event;
    switch (e.which || e.keyCode) {
      case 13: //Your Code Here (13 is ascii code for 'ENTER')
        console.log("enter pressed");
        handleHowdyClick()
        break;
    }
  };
   setInterval(() => {
      placeholder = random_placeholders[generateRandom(0,3)]
    },2000);
    
  });
</script>


<div class="user_input">
  <vscode-text-field bind:this={userInput} size="50" autofocus="true" {placeholder} />
  <vscode-button on:click={handleHowdyClick}>Send</vscode-button>
</div>


<style>
.user_input {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
