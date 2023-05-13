<script lang="ts">
  import { provideVSCodeDesignSystem, vsCodeButton, vsCodeTextField,vsCodeDivider } from "@vscode/webview-ui-toolkit";
  import { vscode } from "./utilities/vscode";
  import { onMount } from "svelte";
  import { msgStore } from "./store";
  import { tick } from "svelte/internal";

  // In order to use the Webview UI Toolkit web components they
  // must be registered with the browser (i.e. webview) using the
  // syntax below.
  provideVSCodeDesignSystem().register(vsCodeButton(), vsCodeTextField(),vsCodeDivider());

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
          let answer = message?.text?.answer ;
          let success = true;
          if(!answer ) {
            answer = ["I didn't get you 😞, can you try with a different prompt"];
            success = false;
          }

          const result = answer.map((msg) => {
            return {
              by: "bot",
              msg,
              success
            };
          });
          $msgStore = [...$msgStore, ...result];
      }
    });
    msgStore.subscribe(async () => {
      await tick();
      console.log("scrolling logic called");
      var El = document.getElementById("msgs");
      El.scrollTo({ top: El.scrollHeight, behavior: "smooth" });
    });
  });

  function copyToClipboard(data) {
    navigator.clipboard.writeText(data);
  }
</script>

<div class="msgs" id="msgs">
  {#each $msgStore as data, index}
    <div class:botmsg={data.by === "bot"} class:usermsg={data.by === "user"}>
      <pre>
        <code>

          {data.msg}
        </code>
      </pre>
      {#if data.by === "bot" && data.success}
       <vscode-button class="copy" on:click={() => copyToClipboard(data.msg)}>copy</vscode-button>
      {/if}
    </div>
  {/each}
  <div id="bottom" />
</div>

<style>
  .msgs {
    height: 700px;
    overflow: scroll;
  }
  pre{
    margin: 0px 0px;
    padding: 0px 0px;
    font-size: larger;
  }
  pre, code {
    white-space: pre-line;
  }
  .usermsg,
  .botmsg {
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom:5px;
    text-align: left;
    width: 80%;
    border-radius: 10px;

    overflow: scroll;
  }
  .usermsg {
    margin-left: auto;
    text-align: right;
    border: 1px solid var(--vscode-editor-foreground);
  }
  .botmsg {
    width: 80%;

    border: 1px solid var(--vscode-editor-foreground);
    border-radius: 10px;
  }
  .copy {
   margin-top: 5px;
    align-self: flex-end;
  }
</style>
