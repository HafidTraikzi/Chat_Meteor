Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  
  Template.body.events({
    "submit .new_message": function (event) {
      
      var name = document.getElementById("pseudo");
      var text = event.target.text.value;
      var scroll_down = document.getElementById("scroll");

      if (text != "") {
        if (name.value == "") {
          Messages.insert({
            name: "Anonymous", text: text, time: new Date(),
          }); 
        } else {
            Messages.insert({
              name: name.value, text: text, time: new Date(),
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
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}


