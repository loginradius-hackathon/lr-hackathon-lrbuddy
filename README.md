# 🚀 LRBuddy 🚀: Integrate LoginRadius in Your application 

## How LRBuddy helps you
- LRBuddy is an AI chatbot integrated into VSCode.
- Inside VSCode you give a prompt to the chatbot and the chatbot generates code snippets
- You can copy the snippets, modify few things if required like adding the apikey etc. and add to your application.
- And your app now have Identity and Access Managment Supported by LoginRadius.

## How to Run the extension

- Install this extension from the marketplace.
- open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and type `LRBuddy: chat`
- This opens a new window with a chatbox.
- Enter the prompt to get code snippet like `Code for Forgot Password`

## Simplified Sequence Diagram

[![](https://mermaid.ink/img/pako:eNqFVGFv2jAQ_Ssnf-o0apVQoLUmpI12E9KourXdpIkvJjnAWrAz-9KWVf3vu9jACkVbJEJyd-_d3buLn0TuChRKBPxVo83xwui510uYWOBL5-Q8DOtAbok-2dJ96h6hNPMFVcb-hO84vRvBu6kfHH2oTUnwYGgBN_dYEr5JgOaqtCeTm0pbguFCU0OSvGiLid1jnntEC99uhlwhXD4S2mCchffXo8OM96HpBXT4Bybm2cmSrzT7R3CYc2SrmhrKOyL0mgWCt2xkXuKHrxhqbvYw9IpLOL76fH3Ye-u1sVgcjzmq3NNgo0RKfjwYbLlAgZbwEbFIBMbO4UKTTvHbqAayk0DBVAJ8Qss9EAIt-Jf88KKAzZwjfjMfBW0Jl9yxDxFXebesaA1YxzTxSX0FmYRrHQLccuyXGv0qrgUcjTEEPcfGyVWvl2I9sr0WOxKGzkZpm4yNcawtg_3_-zyVcBdShwULA-RgqSlfQL0dIJtMnOABtnVBCrqSp0u1t5HKp0HHrc6dnZmi-VaAgz3KV638la4nGbplCdZUFZJ8Ld5WeQV9CWHhHl4CQpQwJp_p3JSGVk0TuavSf2mqqdM-bk_kFi3BZEttCv6yn-JKCeZb4kQofixwprmdiZjYZw7VNbmblc2FIl9jS9QVK7c5CISa6TKwlbf2h3M770I9iUeheiey1-5mZ-1O1m1nJ1nWEiuh2meZ7J-en5_1e_1u97xz2n1uid-Rod0SWBg-Wcbp7IlH0PMfJ1x0_g?type=png)](https://mermaid.live/edit#pako:eNqFVGFv2jAQ_Ssnf-o0apVQoLUmpI12E9KourXdpIkvJjnAWrAz-9KWVf3vu9jACkVbJEJyd-_d3buLn0TuChRKBPxVo83xwui510uYWOBL5-Q8DOtAbok-2dJ96h6hNPMFVcb-hO84vRvBu6kfHH2oTUnwYGgBN_dYEr5JgOaqtCeTm0pbguFCU0OSvGiLid1jnntEC99uhlwhXD4S2mCchffXo8OM96HpBXT4Bybm2cmSrzT7R3CYc2SrmhrKOyL0mgWCt2xkXuKHrxhqbvYw9IpLOL76fH3Ye-u1sVgcjzmq3NNgo0RKfjwYbLlAgZbwEbFIBMbO4UKTTvHbqAayk0DBVAJ8Qss9EAIt-Jf88KKAzZwjfjMfBW0Jl9yxDxFXebesaA1YxzTxSX0FmYRrHQLccuyXGv0qrgUcjTEEPcfGyVWvl2I9sr0WOxKGzkZpm4yNcawtg_3_-zyVcBdShwULA-RgqSlfQL0dIJtMnOABtnVBCrqSp0u1t5HKp0HHrc6dnZmi-VaAgz3KV638la4nGbplCdZUFZJ8Ld5WeQV9CWHhHl4CQpQwJp_p3JSGVk0TuavSf2mqqdM-bk_kFi3BZEttCv6yn-JKCeZb4kQofixwprmdiZjYZw7VNbmblc2FIl9jS9QVK7c5CISa6TKwlbf2h3M770I9iUeheiey1-5mZ-1O1m1nJ1nWEiuh2meZ7J-en5_1e_1u97xz2n1uid-Rod0SWBg-Wcbp7IlH0PMfJ1x0_g)

## Github Workflow
- Runs when code is pushed to main branch.
- The workflow 
  - Train and Generate the NLP Model.
  - Create webview from svelte.
  - Model, Webview is packaged with Extension backend.
  - It is published on VSCode Marketplace with patch version update scheme (0.0.9 -> 0,0.10)


## Contributing

See [the contributing guidelines](./contributing.md) for detailed instructions.


## License

The code is licensed under [MIT License](./LICENSE.txt)


## FAQ
- ***How to test locally?*** Refer [setup docs](./setup.md)
- ***How to clear chat?*** Type `clear` in chatbox and press `Enter`.
- ***DO I need to pay to try this?*** It is completely free and open source.






