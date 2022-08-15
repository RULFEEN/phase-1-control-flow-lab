function scuberGreetingForFeet(someValue) {
  let message
  if (someValue <= 400) {
    message = 'This one is on me!'
 }
  else if (someValue > 2500) {
   message = 'No can do.'
 }
  else if (someValue > 2000) {
  message = 'I will gladly take your thirty bucks.'
 }
 else {
  message = someValue
 };
 return message
}
console.log(scuberGreetingForFeet(someValue));

function ternaryCheckCity(someCity){
  let response
  if (someCity === 'NYC') {
    response = 'Ok, sounds good.'
  }
  else {
    response = 'No go.'
  };
  return response
}
console.log(ternaryCheckCity(someCity));

function switchOnCharmFromTip(tip){
  let feedback
  if (tip === 'generous') {
    feedback = 'Thank you so much.'
  }
  else if (tip === 'not as generous') {
    feedback = 'Thank you.'
  }
  else {
    feedback = 'Bye.'
  };
  return feedback
}
console.log(switchOnCharmFromTip(tip));