let font1;
let s = 'Strings are text';
let userInput;
let button;
let userLine;
let song = [];

function preload(){
  font1 = loadFont('roboto.ttf');

}

function setup() {
  createCanvas(400, 400);
  textFont(font1);
  userInput = createInput();
  userInput.position(100,200);
  button = createButton ('add to make a song');
  button.position(userInput.x, userInput.y + 20);
  button.mousePressed(newLine);


}

function draw() {
  background(220);
  text('Hello, is this working', 40, 50);
  text(s,40,70);
  writeSong();

}

function newLine(){
  userLine = userInput.value();
  userInput.value('');
  song.push(userLine);
  let words = RiTa.tokenize(userLine);
  let r = floor(random(0, words.length));
  let rhymes = RiTa.rhymesSync(words[r]);
  let changedWord = random(rhymes);
  words[r] = changedWord;
  userLine = RiTa.untokenize(words);
  song.push(userLine);

}
function writeSong(){
  for(x = 0; x < song.length; x++){
    text(song[x], 40, 180 + x * 20);

  }

}


