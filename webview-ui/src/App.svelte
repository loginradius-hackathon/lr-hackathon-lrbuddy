<script lang="ts">
  import { provideVSCodeDesignSystem, vsCodeButton, vsCodeTextField } from "@vscode/webview-ui-toolkit";
  import { vscode } from "./utilities/vscode";
  import { onMount } from "svelte";

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
    vscode.postMessage({
      command: "user_msg",
      text: "user prompt",
    });
  }
  let counter = 0;
  onMount(() => {
    window.addEventListener("message", (event) => {
      const message = event.data; // The JSON data our extension sent

      switch (message.command) {
        case "bot_msg":
          counter = message.text;
      }
    });
  });
</script>

<main>
  <h1>LRBuddy!</h1>
  <vscode-button on:click={handleHowdyClick}>Howdy!</vscode-button>
  
    <div>counter: {counter}</div>
  <vscode-text-field />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }

  main > * {
    margin: 1rem 0;
  }
</style>
