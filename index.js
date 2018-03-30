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
  var line = []
  do {
    line.push("I love the Beatles!")
    n++;
  }while (n< 15);
  if (n >= 15) {
    line= 
  }
}