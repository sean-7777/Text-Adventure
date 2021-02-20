const {text, choose, clear} = require(__dirname + '/utils.js');

function menu() {
	text(`
  TEXT ADVENTURE COLLECTION
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);
	choose(['Story 1', 'How To Play'], [
	  () => {
	    clear();
	  },
	  () => {
	    clear() 
	    text("Easy. Just select your option when prompted.");
	    choose(["Press enter to go back"], [menu]);
	  }
	]);
}
menu();