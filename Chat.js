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
        Messages.insert({
          name: name, text: text, time: new Date(),
        });
      
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
  
  Template.user.helpers({
	  users: function() {
		  return Meteor.users.find({}, {sort: {username: 1}});
	  }
  });
  
  Session.setDefault("counter", 0);

  Tracker.autorun(function () {
    var user_counter = Session.get("counter") + 1;
    return "Connected : " + user_counter;
  });
  
  Template.registerHelper("online", function() {
	  return "online";
	)};
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
