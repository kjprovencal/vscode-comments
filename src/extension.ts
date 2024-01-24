import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('kyle-keybindings.startComment', () => {
		// If multiple lines selected, then toggle comment block selection
		// Otherwise, toggle comment line
		if (vscode.window.activeTextEditor?.selections.length! > 1) {
			vscode.commands.executeCommand('editor.action.blockComment');
		} else {
			vscode.commands.executeCommand('editor.action.commentLine');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
