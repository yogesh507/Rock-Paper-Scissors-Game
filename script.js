let userscore = 0;
let computerscore = 0;
let draws = 0;


const drawsSpan = document.getElementById('draws');
const computerscoreSpan = document.getElementById('computer-score');
const userscoreSpan = document.getElementById('user-score');
const resultdiv = document.querySelector('#message');
const resetbutton = document.getElementById('reset-button');


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const getcomputerchoice = ()=>{
    const choicelist = ["rock","paper","scissors"];
    const randomnumber = (Math.floor(Math.random()*3));
    return (choicelist[randomnumber]);
}


const convertToUp = (word)=>{
    switch(word){
    case "rock":
    return "Rock";
    break;
    case "paper":
    return "Paper";
    break;
    case "scissors":
    return "Scissors";
    break;
    }
}

const win = (userchoice,computerchoice)=>{
    userscore++;
    userscoreSpan.innerHTML = userscore;
    const randomWin = ["beats", "smashes", "destroys", "obliterates"];
    const randomnumber = Math.floor(Math.random()*4);
    const winEmoji = ["😂", "🌟", "🐱", "🚀", "🍕", "🎮"];
    const randomnumberEmoji = Math.floor(Math.random()*6);

    resultdiv.innerHTML=`${convertToUp(userchoice)} ${randomWin[randomnumber]} ${convertToUp(computerchoice)}. You Win ! ${winEmoji[randomnumberEmoji]} `;
    document.getElementById(userchoice).classList.add('win-border');
    setTimeout(()=>{document.getElementById(userchoice).classList.remove('win-border')});
}


const lose = (userchoice,computerchoice)=>{
    computerscore++;
    computerscoreSpan.innerHTML = computerscore;
    const randomWin = ["beats", "smashes", "destroys", "obliterates"];
    const randomnumber = Math.floor(Math.random()*4);
    const loseEmoji = ["😂", "🌟", "🐱", "🚀", "🍕", "🎮"];
    const randomnumberEmoji = Math.floor(Math.random()*6);

    resultdiv.innerHTML=`${convertToUp(computerchoice)} ${randomWin[randomnumber]} ${convertToUp(userchoice)}. You Lose ! ${loseEmoji[randomnumberEmoji]} `;
    document.getElementById(userchoice).classList.add('lose-border');
    setTimeout(()=>{document.getElementById(userchoice).classList.remove('lose-border')});
}

const tie = (userchoice,computerchoice)=>{
    draws++;
    drawsSpan.innerHTML = draws;
    const tieEmojis = ["🤔", " 😱", "🙈", "🧐", "🙀", "🙃"];
    const randomnumberEmoji = Math.floor(Math.random() * 6);
    resultdiv.innerHTML = `${convertToUp(computerchoice)} matches ${convertToUp(userchoice)}. It's a tie! ${tieEmojis[randomnumberEmoji]}`;

    document.getElementById(userchoice).classList.add('tie-border');
    setTimeout(() => document.getElementById(userchoice).classList.remove('tie-border'), 600);
}

const game = (userchoice)=>{
    const computerchoice = getcomputerchoice();

    switch(userchoice + computerchoice){
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userchoice,computerchoice);
            break;

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userchoice,computerchoice);
            break;

        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            tie(userchoice,computerchoice);
            break;
    }
}

const resetscores = ()=>{
    computerscore = 0;
    computerscoreSpan.innerHTML = computerscore;
    userscore = 0;
    userscoreSpan.innerHTML = userscore;
    draws = 0;
    drawsSpan.innerHTML = draws;
    resultdiv.innerHTML = "who will win the first game?";
}

const main = () => {
  rock.addEventListener('click', () => game("rock"));

  paper.addEventListener('click', () => game("paper"));

  scissors.addEventListener('click', () => game("scissors"));

  resetbutton.addEventListener('click', () => resetscores());
};


main();