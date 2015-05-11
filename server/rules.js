// função que valida submissão
authAdmin = function(userId, instance){
    return Roles.userIsInRole(userId,['moderador']);
}

Meteor.publish('Noticias', function() {
      return Noticias.find();
});

Noticias.allow({
    insert: authAdmin,
    update: authAdmin,
    remove: authAdmin
});

Meteor.publish('Atividades', function() {
      if(authAdmin(this.userId)){
          return Atividades.find();
      }else{
          return Atividades.find({},{fields:{title:1,description:1}})
      }
});

Atividades.allow({
    insert: authAdmin,
    update: authAdmin,
    remove: authAdmin
});

Meteor.publish('Credenciamentos', function() {
      if(authAdmin(this.userId,null)){
          return Credenciamentos.find();
      }
      return Credenciamentos.find();
});

Credenciamentos.allow({
    insert: authAdmin,
    update: authAdmin,
    remove: authAdmin
});


Meteor.publish("allUserData", function () {
    if(authAdmin(this.userId, null)){
        return Meteor.users.find({});
    }
});

