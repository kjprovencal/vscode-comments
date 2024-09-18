import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "vscode-comments.startComment",
    () => {
      // If multiple lines selected, then toggle comment block selection
      // Otherwise, toggle comment line
      if (!vscode.window.activeTextEditor?.selection.isSingleLine) {
        vscode.commands.executeCommand("editor.action.blockComment");
      } else {
        vscode.commands.executeCommand("editor.action.commentLine");
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
