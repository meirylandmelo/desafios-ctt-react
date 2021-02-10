class Followers {
  getFollowers() {
    return fetch ('./api/follow.json')
  }

  renderFollowers(data) {
    let followers = ''

    data.followers.map(function(follower) {
      followers += `
        <li class="tweet-card">
          <div class="tweet-content">
            <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
            <div class="tweet-header">
              <span class="fullname">
                <strong>${follower.nome}</strong>
              </span>
              <span class="username">${follower.usuario}</span>
            </div>
            <button class="btn btn-follow">Follow</button>
          </div>
        </li>
      `

      const followersList = document.querySelector("#followers-list")
      followersList.innerHTML = followers
    })
  }
}