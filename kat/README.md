#Katherine Beame's Assignment Due: April 6, 2016
##Description:
Create a basic Node modular pattern with a function, greet that takes a name and returns a string that says 'Hello name'. There are is a mocha test that verifies the output and a gulpfile that has three separate tasks, lint:test, lint:js, mocha.

##Lint Tests
  * gulp lint:test uses eslint to go through the test files and lint them
  * gulp lint:js uses eslint to go through all the rest of the files (except package.json)       and lints them
  * gulp mocha runs the mocha test to verify the output of the greet function
  * watchFiles is a gulp watch task that runs all of the previous gulp tasks if any of the relevant files are touched.
