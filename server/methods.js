Meteor.methods({
    credenciaUser: function(userId,credId){
        if(Credenciamentos.findOne({$or:[{user_id: userId},{_id:credId}]})){
            return false;
        }
        else{
            var credenciamento = {
                    user_id: userId ,
                    _id: credId,
                    pontos: 0,
                    atividades:[],
                    achievements:[],
                    compras:[],
                };
            Credenciamentos.insert(credenciamento);
        }
    },
    inscricaoAtividade: function(atividadeId){
        var atividade = Atividades.findOne(atividadeId);
        var cred = Credenciamentos.findOne({user_id:this.userId});
        if(atividade.requires_inscricao &&
            atividade.inscritos.length < atividade.num_max_inscritos
            && Atividades.find({inscritos:cred._id}).count() < num_max_inscricoes){

                Atividades.update(atividadeId,
                        {$addToSet:{inscritos:cred._id}});
                return true;
            }
        return false;
    }
    
});
