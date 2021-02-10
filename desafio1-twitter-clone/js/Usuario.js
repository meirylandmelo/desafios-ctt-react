class Usuario{
  constructor() {
    this.user = JSON.parse(localStorage.getItem("user")) || {}
  }

  findUser() {
    return fetch("./api/usuario.json")
  }

  saveUser(data) {
    return localStorage.setItem("user", JSON.stringify(data[0]))
  }

  renderUser() {
    const user = this.user
    const userProfile = document.querySelector("#user-profile")
    const profileStatus = document.querySelector("#profile-stats")

     userProfile.innerHTML = `
      <h3 class="profile-fullname"><a>${user.nome}<a></h3>
      <h2 class="profile-element"><a>${user.usuario}</a></h2>
      <a class="profile-element profile-website" href="#"><i class="octicon octicon-link"></i>&nbsp;${user.website}</a>
      <a class="profile-element profile-website" href="#"><i class="octicon octicon-location"></i>&nbsp;${user.local}</a>
      <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${user.cadastro}</h2>
      <button class="btn btn-search-bar tweet-to-btn">Tweet to ${user.nome}</button>
    `

    profileStatus.innerHTML = `
    <li class="profile-stats-item-active">
    <a>
      <span class="profile-stats-item profile-stats-item-label">Tweets</span>
      <span id="user-tweets" class="profile-stats-item profile-stats-item-number">${user.quantidade_tweets}</span>
    </a>
    </li>
    <li>
    <a>
      <span class="profile-stats-item profile-stats-item-label">Following</span>
      <span id="user-following" class="profile-stats-item profile-stats-item-number">${user.seguindo}</span>
    </a>
    </li>
    <li>
    <a>
      <span class="profile-stats-item profile-stats-item-label">Followers</span>
      <span id="user-followers" class="profile-stats-item profile-stats-item-number">${user.seguidores}</span>
    </a>
    </li>
    <li>
    <a>
      <span class="profile-stats-item profile-stats-item-label">Likes</span>
      <span id="user-likes" class="profile-stats-item profile-stats-item-number">${user.likes}</span>
    </a>
    </li>
    `
  }
}
