var webComponentsReady = new ReactiveVar(false);

$(window).on("WebComponentsReady", function() {
  return webComponentsReady.set(true);
});

Meteor.startup(function() {
  return Tracker.autorun(function() {
    if (webComponentsReady.get()) {
      return Router.start();
    }
  });
});
