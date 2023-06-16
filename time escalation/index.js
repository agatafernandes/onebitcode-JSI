function addPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const confirmation = confirm('Scale ' + name + ' as ' + position + '?')
  if (confirmation) {
    const teamlist = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player - ' + number
    playerItem.innerText = position + ': ' + name + '(' + number + ')'
    teamlist.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player - ' + number)

  const confirmation = confirm(
    'Remover Player' + playerToRemove.innerText + '?'
  )
  if (confirmation) {
    playerToRemove.remove()
    document.getElementById('numberToRemove').value = ''
  }
}
