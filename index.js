document.addEventListener("DOMContentLoaded", function() {
    const WINNER = document.querySelector("#Win");
    let PLAYER = document.querySelectorAll('.Player');
    let machineChoise = '';
    let output = '';
    let machinePoint = 0;
    let playerPoint = 0;
    function getMachineChoise() {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      if (randomNumber === 1) {
        machineChoise = 'rock';
      } else if (randomNumber === 2) {
        machineChoise = 'paper';
      } else {
        machineChoise = 'scissors';
      };
    };
    
    PLAYER.forEach((playerButton) => {
      playerButton.addEventListener('click', () => {
        getMachineChoise();
        let idPlayer = playerButton.id;
          if (idPlayer === machineChoise) {
            output = `It's a <b>tie</b> no one wins. the machine choose <b>${machineChoise}</b>`;
          }else if ((idPlayer === 'rock' && machineChoise === 'scissors')
          || (idPlayer === 'paper' && machineChoise === 'rock')
          || (idPlayer === 'scissors' && machineChoise === 'paper')) {
            output = `You <b>win</b>! this round. The machine choose <b>${machineChoise}</b>`;
            playerPoint += 1;
          }else {
            output = `the machine choose <b>${machineChoise}</b> so you <b>loose</b> this round`;
            machinePoint += 1;
          };
          
        WINNER.innerHTML = `${output}. The marker is: MACHINE: ${machinePoint}, YOU: ${playerPoint} `;    

        });
        
    }); 



  });