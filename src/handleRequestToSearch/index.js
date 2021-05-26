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

  if (!searchQuery) return null

  vscode.env.openExternal(
    vscode.Uri.parse(`https://www.google.com/search?q=${searchQuery}`)
  )
}
