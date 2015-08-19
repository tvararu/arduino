Template.hello.events({
  'click button': function () {
    Meteor.call('sup')
  }
})
