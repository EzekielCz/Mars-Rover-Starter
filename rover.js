const Command = require("./command");
const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position, mode = "NORMAL", generatorWatts = 110){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   };
   receiveMessage (message) {

      // youll probaly want to use a for loop and if statements for the commandtypes and iterate and try to comapre the index or iteration to the modes/command =types
      // commandtypes "Move and "Status check"

      let content = {
         name : message.name,
         results : message.commands,
      };
      let roverStatus = {
         mode : this.mode,
         generatorWatts : this.generatorWatts,
         position : this.position,
      };
      let roverAndContentOutput = [];
      
      for(let i = 0; i < content.results.length; i++){
         if(content.results[i].commandType === "STATUS_CHECK"){
             roverAndContentOutput.push({ 
               completed : true,
               roverStatus : { mode : this.mode,
                  generatorWatts : this.generatorWatts,
                  position : this.position,} 
          });
         };
         if (content.results[i].commandType === "MODE_CHANGE"){
            roverAndContentOutput.push({ 
               completed : true,
          });
          this.mode = content.results[i].value
         };
         
         if(content.results[i].commandType === "MOVE"){
            if(this.mode === "NORMAL"){
               roverAndContentOutput.push({ 
                  completed : true 
             });
             this.position = content.results[i].value
            } else {
               roverAndContentOutput.push({ 
                  completed : false
             });
            };
         };
      };
         return {
            message: message.name,
            results: roverAndContentOutput
         };
   }; 

  /* receiveMessage (message) {
   message
   let results = [];
   };*/
};

//   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
//   let message = new Message('Test message with two commands', commands);
//   let rover = new Rover(98382);    // Passes 98382 as the rover's position.
//   let response = rover.receiveMessage(message);

//   let commandMove = [new Command("MOVE","LOW_POWER")];
//   let messageMove = new Message ("something", commandMove);
//   let responseMove = rover.receiveMessage(messageMove);

   // console.log(roverAndContentOutput);
   
module.exports = Rover;