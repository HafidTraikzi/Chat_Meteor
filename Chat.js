Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {

  Accounts.ui.config({
   passwordSignupFields: "USERNAME_ONLY"
  });
  
  Template.body.events({
<<<<<<< HEAD
    "submit .new_message": function(event) {
=======
    "submit .new_message": function (event) {
>>>>>>> 4c58b8f80f762ada3aa3e4b965d9253b419f48bf
      
      var name = Meteor.user().username;
      var text = event.target.text.value;
      var scroll_down = document.getElementById("scroll");
      
      if (text != "") {
<<<<<<< HEAD
        Messages.insert({
          name: name, text: text, time: new Date(),
        });
=======
        if (name.value == "") {
          Messages.insert({
            name: "Anonymous", text: text, time: new Date(),
          }); 
        } else {
            Messages.insert({
              name: name, text: text, time: new Date(),
            });
          }
>>>>>>> 4c58b8f80f762ada3aa3e4b965d9253b419f48bf
      
      event.preventDefault();
      event.target.text.value = "";
      scroll_down.scrollTop = scroll_down.scrollHeight;

      return false;
      }
	  }
	});

  Template.body.helpers({
<<<<<<< HEAD
    messages: function() {
=======
    messages: function () {
>>>>>>> 4c58b8f80f762ada3aa3e4b965d9253b419f48bf
      return Messages.find({});
    }
  });
  
<<<<<<< HEAD
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
=======
  Template.registerHelper("username", function() {
	  return (Meteor.user() && Meteor.user().statusDefault) || Meteor.user().username;
>>>>>>> 4c58b8f80f762ada3aa3e4b965d9253b419f48bf
  });
  
}

if (Meteor.isServer) {
<<<<<<< HEAD
  Meteor.startup(function() {
    Meteor.publish('userPresence', function() {
  // Example of using a filter to publish only "online" users:
  var filter = {state: "online"};
  return UserPresences.find(filter);
});
  });
}
=======
  Meteor.startup(function () {
    
  });
}


>>>>>>> 4c58b8f80f762ada3aa3e4b965d9253b419f48bf
