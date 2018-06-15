const randomAnswers = () => [1,1,2,2,3,3,4,4,5].sort((a,b) => 0.5-Math.random());

let clickedArray = [];

let started = false;
let interval;
let time = 0;

const startTimer = () => {
  if (!started) {
    interval = setInterval(() => {
      time++;
      document.getElementById("timer").innerHTML= "Elapsed time: "+time;
    }
      ,1000);
    started = true;
  }
};

const reveal = (cell) => {
  cell.clicked = true;
  cell.innerHTML = cell.value;
  cell.style.backgroundColor = "red";
};

const setUp = () => {
  const answers = randomAnswers();
  const grid = document.getElementsByTagName("td");
  let i = 0;
  for(let cell of grid) {
    cell.completed = cell.clicked = false;
    cell.value = answers[i++];
    // event handlers
    cell.addEventListener("mouseenter",
      function() {
        if (!this.completed && !this.clicked)
          this.style.background = "orange";
      }
    );
    cell.addEventListener("mouseleave",
      function() {
        if (!this.completed && !this.clicked)
          this.style.background = "blue";
      }
    );
    cell.addEventListener("click",
      function() {
        startTimer();
        clickedArray.push(this);
        reveal(this);
      }
    );
  };
};
