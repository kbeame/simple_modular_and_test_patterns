const greet = module.exports = function (name) {
  return 'Hello ' + name;
  };

if (process.argv.length >= 2) {
  var commandname = process.argv[2]
  console.log(greet(commandname));
  };
