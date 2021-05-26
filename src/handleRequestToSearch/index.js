const vscode = require('vscode')

module.exports = async function handleRequestToSearch() {
  const searchQuery = await vscode.window.showInputBox({
    value: '',
    title: 'Search query',
    placeHolder: 'What do you want to know?',
    validateInput: (value) => {
      if (value === '') return 'Missing query'
    }
  })

  vscode.env.openExternal(
    vscode.Uri.parse(`https://www.google.com/search?q=${searchQuery}`)
  )
}
