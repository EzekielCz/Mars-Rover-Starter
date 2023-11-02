const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  let response = rover.receiveMessage(message);

  /*let commandMove = [new Command("MOVE",74)];
  let messageMove = new Message ("something", commandMove);
  let responseMove = rover.receiveMessage(messageMove);*/

  it("constructor sets position and default values for mode and generatorWatts", function() {
    /*let object = new Rover(94);
    expect(object.position).toBe(94);
    expect(object.mode).toBe("NORMAL");
    expect(object.generatorWatts).toBe(110);*/
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });

  it("response returned by receiveMessage contains the name of the message", function() {
    // expect(response[0].name).toBe("Test message with two commands");
    // expect(response.name).toBe("Test message with two commands");
    expect(response.message).toEqual("Test message with two commands");
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    expect(response.results.length).toBe(2);
  });

  it("responds correctly to the status check command", function() {
    /*expect(response[0].results[1].commandType).toBe("STATUS_CHECK");
    expect(response[1].generatorWatts).toBe(110);
    expect(response[1].mode).toBe("NORMAL");
    expect(response[1].position).toBe(98382);*/
    // expect(response.results[0].results[1].commandType).toBe("STATUS_CHECK");
    expect(response.results[1].roverStatus.generatorWatts).toBe(110);
    expect(response.results[1].roverStatus.mode).toBe("NORMAL");
    expect(response.results[1].roverStatus.position).toBe(98382);
  });

 it("responds correctly to the mode change command", function() {
    // expect(response.results[2].completed).toBe(true);
  });

  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let commandPow = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 74)];
    let messagePow = new Message('anything', commandPow);
    let roverPow = new Rover(9);  
    let responsePow = roverPow.receiveMessage(messagePow);

    // expect(responseMove.results[0].results[0].commandType).toBe("MOVE");
    // expect(responseMove.results[0].results[0].value).toBe();
    expect(responsePow.results[1].completed).toBe(false);
    expect(roverPow.position).toBe(9);
  
  });

  it("responds with the position for the move command", function() {
    let commandPow = [new Command('MODE_CHANGE', 'NORMAL'), new Command('MOVE', 74)];
    let messagePow = new Message('anything', commandPow);
    let roverPow = new Rover(9);  
    let responsePow = roverPow.receiveMessage(messagePow);
    expect(roverPow.position).toBe(74);
  });

  // 7 tests here!

});
