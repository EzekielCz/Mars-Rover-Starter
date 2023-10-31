const Command = require("./command");

class Rover {
   // Write code here!
   constructor(position, mode = "NORMAL", generatorWatts = 110){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   };
   receiveMessage (message) {
      
      let content = {
         name : message.name,
         results : message.commands,
      };
      let roverStatus = {
         mode : this.mode,
         generatorWatts : this.generatorWatts,
         position : this.position,
      };
      let roverCompletion = {
         this.completed = completed,
      }
       let roverAndContentOutput = [];
       roverAndContentOutput.push(content,roverStatus);

      if(message.commands ==="STATUS_CHECK"){
         return roverAndContentOutput;
      };
         return roverAndContentOutput;
   }; 
  /* receiveMessage (message) {
   message
   let results = [];
   };*/
};

module.exports = Rover;