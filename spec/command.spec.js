const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
  it("Command type required.", function (){
    // let output;
    // expect(output=new Command ("Array").commandType
    let output = new Command ("Array");
    expect(output.commandType).toBe("Array");
  });
  it("constructor sets a value passed in as the 2nd argument", function(){
    let output = new Command ("Array","String");
    expect(output.value).toBe("String");
    // let output;
    // expect(output = new Command("Array","String").value).toBe("String");
  });

});