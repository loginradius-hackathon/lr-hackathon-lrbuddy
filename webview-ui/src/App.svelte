<script lang="ts">
  import { provideVSCodeDesignSystem, vsCodeButton, vsCodeTextField } from "@vscode/webview-ui-toolkit";
  import { vscode } from "./utilities/vscode";
  import { onMount } from "svelte";
  import UserInput from "./UserInput.svelte";
  import Message from "./Message.svelte";
  import Banner from "./Banner.svelte";
  let userInput;

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

  function handleHowdyClick() {
    console.log("inside handle howdy click");
    console.log({ "user input": userInput.value });
    vscode.postMessage({
      command: "user_msg",
      text: userInput.value,
    });
  }
  let counter = 0;
  onMount(() => {
    window.addEventListener("message", (event) => {
      const message = event.data; // The JSON data our extension sent
      console.log({ message });
      switch (message.command) {
        case "bot_msg":
          counter = message.text.answer;
      }
    });
    userInput.onkeydown = function (e) {
      console.log("enter event called");
      e = e || window.event;
      switch (e.which || e.keyCode) {
        case 13: //Your Code Here (13 is ascii code for 'ENTER')
          console.log("enter pressed");
          handleHowdyClick();
          break;
      }
    };
  });
</script>

<main>
  <Banner/>
  <div class="msg"><Message /></div>
  <div class="user_input"><UserInput /></div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    
    height: 800px;
  }
  .msg {
    flex: 1;
  }
  /* .user_input {
  } */
  main{

    margin: 4px;
  }
</style>
