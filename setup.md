## How to run locally

```bash
# Copy sample extension locally
npx degit https://github.com/loginradius-hackathon/lr-hackathon-lrbuddy

# Navigate into the directory
cd LRBuddy

# Install dependencies for both the extension and webview UI source code
npm run install:all

# Build webview UI source code ( generates the NLP model as well)
npm run build:webview


```

Once you are inside VS Code you can run the extension by doing the following:

1. Press `F5` to open a new Extension Development Host window
2. Inside the host window, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and type `LRBuddy: chat`
