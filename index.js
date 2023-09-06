document.addEventListener("DOMContentLoaded", function() {
    let winner = document.querySelector("#Win");
    let machineChoise = '';
    let output = '';
    function theComputerDesicion() {
      const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
      if (numeroAleatorio === 1) {
        machineChoise = 'rock';
        } else if (numeroAleatorio === 2) {
          machineChoise = 'paper';
          } else {
            machineChoise = 'scissors';
            };
      return machineChoise;
    };
    document.querySelector("#Player").addEventListener("input", function() {
      let playerSelection = this.value.toLowerCase();
      theComputerDesicion();
      if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') { 
      if (playerSelection === machineChoise) {
        output = `It's a tie. the machine choose ${machineChoise}`;
      } else if((playerSelection === 'rock' && machineChoise === 'scissors')
               || (playerSelection === 'paper' && machineChoise === 'rock')
               || (playerSelection === 'scissors' && machineChoise === 'paper')) {
          output = `You win!. The machine choose ${machineChoise}`;
      } else {
        output = `The machine choose ${machineChoise}. you loose :(`;
      };
      };
      winner.textContent = output;
    }); 
  });