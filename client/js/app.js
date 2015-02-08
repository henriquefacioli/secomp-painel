// Routes e coisas relativas à navegação/interação com o aplicativo

//hook de obrigar o login
loginHook = function() {
    if(Meteor.user() === null){
        this.redirect('login');
    }
    this.next();
}

// Página de login
Router.route('/login', function () {
    this.render('login');
},{name:'login'});

// Dashboard
Router.route('/', function () {
    this.layout('painel');
    this.render('dashboard');
},{ name:'dashboard',
    onBeforeAction: loginHook });

// Notícias
Router.route('/noticias', function () {
    this.layout('painel');
    this.render('noticias');
},{ name:'noticias',
    onBeforeAction: loginHook });

// Atividades
Router.route('/atividades', function () {
    this.layout('painel');
    this.render('atividades');
},{ name:'atividades',
    onBeforeAction: loginHook });

// calendario
Router.route('/calendario', function () {
    this.layout('painel');
    this.render('calendario');
},{ name:'calendario',
    onBeforeAction: loginHook });

// achievements
Router.route('/achievements', function () {
    this.layout('painel');
    this.render('achievements');
},{ name:'achievements',
    onBeforeAction: loginHook });

// loja
Router.route('/loja', function () {
    this.layout('painel');
    this.render('loja');
},{ name:'loja',
    onBeforeAction: loginHook });

// Mapa
Router.route('/mapa', function () {
    this.layout('painel');
    this.render('mapa');
},{ name:'mapa',
    onBeforeAction: loginHook });



Template.painel.helpers({
    atRoute: function(path){
        return path === Router.current().route.getName();
    },
    username: function(path){
        return Meteor.user().username;
    }
});

Template.painel.events({
    'click .navbar-collapse ul li a': function(){
        $('.navbar-collapse').collapse('hide');
    }
});

