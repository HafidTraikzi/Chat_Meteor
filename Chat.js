Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {

  Accounts.ui.config({
   passwordSignupFields: "USERNAME_ONLY"
  });
  
  Template.body.events({
    "submit .new_message": function (event) {
      
      var name = Meteor.user().username;
      var text = event.target.text.value;
      var scroll_down = document.getElementById("scroll");
      
      if (text != "") {
        if (name.value == "") {
          Messages.insert({
            name: "Anonymous", text: text, time: new Date(),
          }); 
        } else {
            Messages.insert({
              name: name, text: text, time: new Date(),
            });
          }
      
      event.preventDefault();
      event.target.text.value = "";
      scroll_down.scrollTop = scroll_down.scrollHeight;

      return false;
      }
	  }
	});

  Template.body.helpers({
    messages: function () {
      return Messages.find({});
    }
  });
  
  Template.registerHelper("username", function() {
	  return (Meteor.user() && Meteor.user().statusDefault) || Meteor.user().username;
  });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}


