// the workshop game engine
var engine = require('workshop-engine');

// game variables
let playerAlias;          // player alias
let userStory = false;    // if you currently have a user story
let userStoryHours = 4;   // how many hours you need to finish the current user story
let movedToDone = 1;      // how many user stories you've moved to "Done"
let algorithm = false;    // compression algorithm
let antonCleaned = false; // if anton's storage was cleaned
let pineapples = 4;       // what you'll need to hack Hooli-Con
let antonDisks = [        // your server's disks
  { disk: ['□137839', '903792', '092384'] },
  { disk: ['2389372', '□20982□30', '□390283'] },
  { disk: ['□8948□49', '432984', '238749'] }
];
const hooliConSections = ['NORTH', 'SOUTH', 'EAST', 'WEST']; // the sections of Hooli-Con





/*
console.log("função engine.____: ");  // show the content of engine()
console.log(engine);
*/





//create a new game stage named Workshop 
const stage = engine.create({
  type: 'before',
  name: 'workshop'
});

stage.executeBefore(function() {
  if (!codeChallenge) {
    console.log('You can not participate in this workshop!');
    return false;
  }
});


/*
console.log("função stage._: ");  //show the content of stage()
console.log(stage);
*/


// show a nice banner before the stage is executed
console.log(" ");
stage.executeBefore(function() {
  console.log("------------------------------------------------------");
  engine.showBanner('SillyCode Valley');
  console.log('Welcome to the workshop, young <Beta Code Cadet>');
  console.log("------------------------------------------------------");
  console.log(" ");
  console.log(" ");
  console.log(" ");
});







const betaCodeCadet = engine.create({
  type: 'before',
  name: 'playerAlias'
});


betaCodeCadet.addQuestion({
  type: 'input',
  message: 'What\'s your name?',
  validator: function(answer) {

    playerAlias = answer;



    if (playerAlias === "") {
      console.log(" ");
      console.log(" ");
      console.log('                  YoU dO NoT HaVe a naMe? WtF???')
      console.log(" ");
      test;   //WtF???? need this for repeat????
    }


    // if (playerAlias === 'exit') {
    //     engine.quit()
    //   return null;     
    // }

  },


  action: function(answer) {
    playerAlias = answer;
    console.log(" ");
    console.log("------------------------------------------------------");
    console.log('let\'s go ' + playerAlias + '!');
    console.log("------------------------------------------------------");

    console.log(" ");
  }



});

// add a question to that same stage

betaCodeCadet.addQuestion({
  type: 'confirm',
  message: 'Do you want to play The GAMiEs?',
  action: function(answer) {
    if (answer) {

      console.log(" ");
      console.log("------------------------------------------------------");
      engine.showBanner('\\_( °_-_° )_/');
      console.log(" ");
      console.log('Great, let\'s get some coding done!');
      console.log("------------------------------------------------------");
      console.log(" ");
      console.log('Starting The GAMiEs...')
      console.log(" ");





      /*
     // setTimeout(function(){ console.log("Starting The GAMiES... ")}, 1000)
      
       setTimeout(function(){ console.log('1')}, 1000)
       setTimeout(function(){ console.log('2')}, 2000)
       setTimeout(function(){ console.log('3')}, 3000)
       setTimeout(function(){ console.log("Start ")}, 5000)
     
     //setTimeout(function(){ console.log('Start!')}, 3000)
     */






    } else {
      engine.showBanner('  Loser!');
      engine.showBanner('( + _ + )');
      //  console.log('Get lost...');
      console.log(" ");
      engine.quit();
    }


  }

});





















engine.run();  //start game







const Workstation = engine.create({
  type: 'stage',
  name: 'Workstation'
});
const ScrumBoard = engine.create({
  type: 'stage',
  name: 'Scrum Board'
});
const Anton = engine.create({
  type: 'stage',
  name: 'Anton'
});
const HackerHostel = engine.create({
  type: 'stage',
  name: 'Hacker Hostel'
});
const HolliCon = engine.create({
  type: 'stage',
  name: 'Holli-Con'
});
const Quit = engine.create({
  type: 'stage',
  name: 'Quit'
});


//----------------------------------------------------------------------

Workstation.executeBefore(function() {


  engine.showBanner('  -Workstation-')
  console.log("Entering on Workstation... ")
  console.log('');


});



Workstation.executeAfter(function() {



});


//-----------------------------..---------------------------------------



//----------------------------------------------------------------------

ScrumBoard.executeBefore(function() {


  engine.showBanner('  -Scrum Board-')
  console.log("Entering on Scrum Board... ")
  console.log('');


});



Workstation.executeAfter(function() {



});


//-----------------------------..---------------------------------------

//----------------------------------------------------------------------

Anton.executeBefore(function() {


  engine.showBanner('  -Anton-')
  console.log("Entering on Anton... ")
  console.log('');


});



Anton.executeAfter(function() {



});


//-----------------------------..---------------------------------------


//----------------------------------------------------------------------

HackerHostel.executeBefore(function() {


  engine.showBanner('  -Hacker Hostel-')
  console.log("Entering on Hacker Hostel... ")
  console.log('');


});



HackerHostel.executeAfter(function() {



});


//-----------------------------..---------------------------------------

//----------------------------------------------------------------------

HolliCon.executeBefore(function() {


  engine.showBanner('  -Holli-Con-')
  console.log("Entering on Holli-Con... ")
  console.log('');


});



HolliCon.executeAfter(function() {



});


//-----------------------------..---------------------------------------



//----------------------------------------------------------------------


Quit.executeAfter(function() {
  engine.quit()


  console.log('Leaving...');
  console.log('');
  setTimeout(function() { console.log('3') }, 1000)
  setTimeout(function() { console.log(' ') }, 1000)

  setTimeout(function() { console.log('2') }, 2000)
  setTimeout(function() { console.log(' ') }, 2000)

  setTimeout(function() { console.log('1') }, 3000)
  setTimeout(function() { console.log(' ') }, 3000)

  setTimeout(function() { engine.showBanner('Good ') }, 4000)
  setTimeout(function() { engine.showBanner('           Byyyye  : )') }, 5000)

});
//---------------------------.
