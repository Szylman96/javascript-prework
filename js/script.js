let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else (randomNumber == 3){
    computerMove = 'nożyce';
}


printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (randomNumber == 2){
    playerMove = 'papier';
} else (randomNumber == 3){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }else (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!');
  }

if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }else (computerMove == 'piepier' && playerMove == 'kamień'){
    printMessage('Przegrywasz!');
  }

if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }else (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz!');
  }
  
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  }else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
    }else(computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('Remis!');
    }


  if( playerMove == 'nieznany ruch'){
    printMessage('Nieznany ruch!');
}
