const usuario = new Usuario()
const tweets = new Tweet()
const followers = new Followers()

usuario.findUser()
  .then(function(resposta){
    resposta.json()
    .then(function(dados){
      usuario.saveUser(dados)
      usuario.renderUser()
    })
  })

tweets.getTweets()
  .then(function(resposta){
    resposta.json()
    .then(function(dados){
      tweets.renderTweets(dados)
    })
  })

followers.getFollowers()
  .then(function(resposta){
    resposta.json()
    .then(function(dados){
      followers.renderFollowers(dados)
    })
  })