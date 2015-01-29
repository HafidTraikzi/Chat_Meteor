Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  
  Template.body.events({
    "submit .new_message": function (event) {

      var name = "Anonymous";
      var text = event.target.text.value;

      if (text != "") {
        Messages.insert({
          name: name, text: text, time: new Date(),
        });

      event.target.text.value = "";

      return false;
      }
	  }
	});

  Template.body.helpers({
    messages: function () {
      return Messages.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}


