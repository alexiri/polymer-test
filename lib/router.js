Router.configure({
  layoutTemplate: 'layout',
  autoStart: false,
});

Router.route('/', function () {
  this.render('Home');
});
