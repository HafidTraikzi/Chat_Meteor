Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  
  Template.body.events({
    "submit .new_message": function (event) {
      
      var name = document.getElementById("pseudo");
      var text = event.target.text.value;

      if (text != "") {
        Messages.insert({
          name: name.value, text: text, time: new Date(),
        });      
        
      event.preventDefault();
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


