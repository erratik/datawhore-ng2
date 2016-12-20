/*******************************
          Release All
*******************************/

/*
 This task update all SUI individual component repos with new versions of wrapper

  * Commits changes from create wrapper to GitHub and Tags

*/

var
  runSequence = require('run-sequence')
;

/* Release All */
module.exports = function(callback) {

  runSequence(
    'update distributions', // commit less/css versions to github
    'update wrapper', // commit wrapper to github
    callback
  );

};
