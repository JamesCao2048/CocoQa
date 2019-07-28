import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('CocoQA.start', () => {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        'cocoqa', // Identifies the type of the webview. Used internally
        'CocoQA', // Title of the panel displayed to the user
        vscode.ViewColumn.Active, // Editor column to show the new webview panel in.
        {
          enableScripts: true,
          retainContextWhenHidden: true
        } // Webview options. More on these later.
      );    

      panel.webview.html = getWebviewContent("http://202.120.40.28:4463/plugin.html");
    }
    )
  );
}

function  getWebviewContent(url: String) {
  const html = `
        <!DOCTYPE html >
        <html lang="en">
        <head>
        <head>
        <style>
          body, html
            {
              margin: 0; padding: 0; height: 100%; overflow: hidden;
            }
            .vscode-light {
                background: #fff;
            }
            iframe
            {
              position:relative; left:5%
            }
        </style>
      </head>
      <body>
        <iframe  class="vscode-light" id= "iframe" width="95%" height="100%"  src="${url}">
        </iframe>
      </body>
      </html>
        `;
  return html;
}
