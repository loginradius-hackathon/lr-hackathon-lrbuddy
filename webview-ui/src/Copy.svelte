<script>
  export let msg;
  let copyButtonText="Copy";
  function componentClicked() {
    navigator.clipboard.writeText(msg)
    console.log("component is clicked")
    copyButtonText = "Copied";
      setTimeout(() => {
        copyButtonText = "Copy";
      }, 1000);
  }
</script>
<style>
  div {
    display: flex;
   
  }
  .copy {
    margin-left: auto;
  }
 
</style>
<div>

  <vscode-button class="copy"  on:click={componentClicked} >{copyButtonText}</vscode-button>
</div>
