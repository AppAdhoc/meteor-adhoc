//This is an example to generate client id. Use cookies to store client id if necessary.
var generateClientId = function() {
	function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

var clientId = generateClientId();

// init SDK with appKey & client id
adhoc.init('ADHOC_50000000000000ad80c23462', clientId);
console.log(adhoc.c);
//Notice: You could just set client id to '0aafb614-b788-3e87-fa80-b433a4d4fcab' to see case A, 
//'37118798-e276-b801-94bb-3cf971e9b8e4' to see case B.

//get flags for this app
adhoc.getExperimentFlags(function(flags){
  Session.set('ADHOC_FLAG_btn_color', flags.btn_color);   
  console.log(flags.btn_color);
})

Template.showCase.helpers({
  caseValue: function(){
    return Session.get('ADHOC_FLAG_btn_color');
  }
})


Template.showCase.events({
  'click #actionBtn': function () {
    // increase the stat when button is clicked
    adhoc.incrementStat('action_btn_clicks', 1);
  }
});



