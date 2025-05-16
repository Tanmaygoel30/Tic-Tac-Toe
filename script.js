const boxes = document.querySelectorAll(".box");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const startBt = document.querySelector("#start");
const blurView = document.querySelector(".blur");

const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");

let Player1;
let Player2;

const reset = document.querySelector("#reset");
const mobReset = document.querySelector("#mobReset");


let newGame = () => {
  console.log("New Game");
  window.location.reload();
};

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;

let checkwinner = () => {
  for (let key of win) {
    let pos1Val = boxes[key[0]].textContent;
    let pos2Val = boxes[key[1]].textContent;
    let pos3Val = boxes[key[2]].textContent;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        blurView.classList.add("winner");
        if (count % 2 == 0) {
          console.log("Winner is Player1");
          blurView.innerHTML = `<h2>Wohoo!!</h2><h3>....Winner is ${Player1}....</h3><button onclick="newGame()">New Game</button>`;
        } else {
          console.log("Winner is Player2");
          blurView.innerHTML = `<h2>Wohoo!!</h2><h3>....Winner is ${Player2}....</h3><button onclick="newGame()">New Game</button>`;
        }
      }
    }
  }
};

//Start the game
startBt.addEventListener("click", function () {
  Player1 = name1.value;
  Player2 = name2.value;
  if (Player1 === "" || Player2 === "") {
    alert("Please enter your name to start the game.");
  } else {
    blurView.classList.add("unblur");
    player1.style.backgroundColor = "aqua";
    player1.style.border = "none";
    player1.innerHTML = "<h3>Your turn</h3>";
    player2.innerHTML = `<h3>${Player2}</h3>`;
  }
});

//Reset the game
reset.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.textContent = "";
  });
  count = 0;
  player1.style.backgroundColor = "aqua";
  player1.style.border = "none";
  player1.innerHTML = "<h3>Your turn</h3>";

  player2.style.backgroundColor = "";
  player2.style.border = "2px solid gray";
  player2.innerHTML = `<h3>${Player2}</h3>`;
});

mobReset.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.textContent = "";
  });
  count = 0;
  player1.style.backgroundColor = "aqua";
  player1.style.border = "none";
  player1.innerHTML = "<h3>Your turn</h3>";

  player2.style.backgroundColor = "";
  player2.style.border = "2px solid gray";
  player2.innerHTML = `<h3>${Player2}</h3>`;
});

//Game main logic
boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // Prevent clicking a box that already has content
    if (box.textContent !== "") {
      alert("It's already clicked");
      return;
    }

    if (count % 2 === 0) {
      // Player 1's turn
      box.textContent = "X";
      player2.style.backgroundColor = "aqua";
      player2.style.border = "none";
      player2.innerHTML = "<h3>Your turn</h3>";

      player1.style.backgroundColor = "";
      player1.style.border = "2px solid gray";
      player1.innerHTML = `<h3>${Player1}</h3>`;
    } else {
      // Player 2's turn
      box.textContent = "O";
      player1.style.backgroundColor = "aqua";
      player1.style.border = "none";
      player1.innerHTML = "<h3>Your turn</h3>";

      player2.style.backgroundColor = "";
      player2.style.border = "2px solid gray";
      player2.innerHTML = `<h3>${Player2}</h3>`;
    }

    checkwinner();

    count++;
  });
});
