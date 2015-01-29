Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  
  Template.body.events({
    "submit .new_message": function (event) {
      // This function is called when the new task form is submitted
      var name = 'Anonymous';
      var text = event.target.text.value;

      if (text != "") {
        Messages.insert({
          name: name, text: text, time: Date.now(),
        });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
      }
	  }
	});

  Template.body.helpers({
    messages: function () {
    // Show newest tasks first
      return Messages.find({});

    }
  });
   
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


