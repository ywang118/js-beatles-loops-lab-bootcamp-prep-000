function theBeatlesPlay(musicians, instruments) {
  var line = []
  for(let i = 0; i < musicians.length; i++){
    line.push(musicians[i]+ ` plays `+ instruments[i])
  }
  return line
}

function 