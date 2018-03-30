function theBeatlesPlay(musicians, instruments) {
  var line = []
  for(let i = 0; i < musicians.length; i++){
    line.push(musicians[i]+ ` plays `+ instruments[i])
  }
  return line
}

function johnLennonFacts(facts) {
  var line = []
  let i = 0 
  while (i< facts.length) {
    line.push(facts[i]+`!!!`)
    i++
  }return line
}

function iLoveTheBeatles(n){
  
}