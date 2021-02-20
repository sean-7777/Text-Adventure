function text(txt) {console.log(txt);}
function choose(opts, funcs) {
  text("What would you like to do?");
  for(let i = 1; i < opts.length; i++) {
    text(`${i}: ${opts[i]}`);
  }
  let userOpt = prompt("");
  let isValid = true;
  opts.forEach((item) => {
    if(!userOpt.includes(item)) {
      isValid = false;
    }
  });
  if(!isValid) {
    text("ERROR: Invalid Option");
    choose(opts, funcs);
  } else if(isValid) {
    funcs[userOpt]();
  }
}
function clear() {console.clear()}

modules.export = {
  text: text, 
  choose: choose,
  clear: clear
}