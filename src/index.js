const vscode = require('vscode')
const handleRequestToSearch = require('./handleRequestToSearch')
const pkgJson = require('../package.json')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(`${pkgJson.name} activated!`)
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'searchGoogle.searchGoogle',
      handleRequestToSearch
    )
  )
}

// this method is called when your extension is deactivated
function deactivate() {
  console.log(`${pkgJson.name} deactivated!`)
}

module.exports = {
  activate,
  deactivate
}
