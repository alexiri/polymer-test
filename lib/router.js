Router.configure({
  autoStart: false,
});

Router.route('/', function () {
  this.render('Home');
});
