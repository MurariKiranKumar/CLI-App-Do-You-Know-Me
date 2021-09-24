var readlineSync = require('readline-sync');

var userName = readlineSync.question('What\'s your name? \n');

console.log('\nWelcome ' + userName + '.'+ '\n' +'To the Game Of Do you know Kiran?\n');

var score = 0;

function play(question,answer){
  var useranswer = readlineSync.question(question);
  if(useranswer.toUpperCase() == answer.toUpperCase()){
    console.log('You Are Correct!');
    score = score+1;
  }
  else{
    console.log('You Are Wrong!');
  }

  console.log('Your Current Score is: ' + score );
  console.log('---------------------------------');
}

function beatScore(personalscore){
  for(var j=0;j<individualScores.length;j++){
    if(personalscore>individualScores[j].score){
      console.log('\nHurray!!! You have beaten the ' + individualScores[j].userName + ' Score.' + '\n' + 'Send me the Screenshot so that I will update your name in the Score Board.');
      break;
    }
  }
}

var questions = [{
question:'Who Is My Fav Hero? ',
answer: 'Chiru'
},{
question:'Who Is My Fav Music Director? ',
answer: 'ManiSharma'
},{
question:'My Dream Vacation Spot? ',
answer: 'Europe'
},{
question:'What\'s My Fav Series? ',
answer: 'Friends'
},{
question:'Who Is my Sweet Heart? ',
answer: 'Padhu'
}];

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}

var individualScores = [{
  userName:'Kiran',
  score:5
},
{
  userName:'Padma',
  score:5
},
{
  userName:'Sridhar',
  score:3
}
];

console.log('Yahoo! Your Total Score is: ' + score + '\n');

console.log('Check out the High Scores:');

for(var i =0;i<individualScores.length;i++){
  console.log(individualScores[i].userName + ':' + individualScores[i].score)
}

beatScore(score);
