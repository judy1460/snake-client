const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.handleUserInput(true);
  stdin.handleUserInputEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = { setupInput };