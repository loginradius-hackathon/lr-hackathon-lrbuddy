<script lang="ts">
  import { provideVSCodeDesignSystem, vsCodeButton, vsCodeTextField } from "@vscode/webview-ui-toolkit";
  import { vscode } from "./utilities/vscode";
  import { onMount } from "svelte";
  import { msgStore } from "./store";
  import { each, tick } from "svelte/internal";

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

  onMount(() => {
    window.addEventListener("message", (event) => {
      const message = event.data; // The JSON data our extension sent
      console.log({ message });
      switch (message.command) {
        case "bot_msg":
          const answer = message.text.answer || ["I didn't get you, can you try with a different prompt"]
          const result = answer.map(msg => {
            return {
              by: "bot",
              msg
            }
          })
          $msgStore = [...$msgStore, ...result];
      }
    });
    msgStore.subscribe(async() => {
      await tick()
      console.log("scrolling logic called");
      var El = document.getElementById('msgs')
      El.scrollTo({top: El.scrollHeight, behavior: 'smooth'});
    
    });
  });
</script>

<div class="msgs" id="msgs">
  {#each $msgStore as data, index}
    <div
      class:botmsg={data.by === "bot"}
      class:usermsg={data.by === "user"}
    >
      <pre>{data.msg}</pre>
    </div>
  {/each}
  <div id="bottom"></div>
</div>

<style>
  .msgs {
    height: 600px;
    position:relative;
    overflow: scroll;
  }
  .usermsg {
    width: 80%;
    margin-left: auto;
    text-align: right;
    margin-top: 3px;
    margin-bottom: 3px;
    padding-left:4px;
    padding-right: 4px;
    overflow: scroll;
    /* background-color: #e1730c; */
  }
  .botmsg {
    width: 80%;
    /* background-color: #deac17; */
    margin-top: 3px;
    margin-bottom: 3px;
    padding-left:4px;
    padding-right: 4px;
    overflow: scroll;
    border-radius: 10px;

  }
</style>
