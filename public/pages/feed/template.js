const template = (user) => {
  return `
<section class="feed-container">

  <header class="header">
    <nav id="menu-feed" class="menu-sandwich">
      <input id="menu-hamburguer" type="checkbox" class="menu-btn"/>
      <label for="menu-hamburguer" class="menu-icon"><span class="nav-icon"></span></label>
      <ul class="menu">
        <li><a href="#profile" class="menu-item">Perfil</a></li>
        <li><a href="#feed" class="menu-item">Feed</a></li>
        <li><a href="#chat" class="menu-item">Chat</a></li>
        <li><a href="#logout" class="menu-item">Sair</a></li>
      </ul>
    </nav>
    <div>
    <img alt="logo-nav" class="feed-logo" src="imagens/logo-name.png"/>
    </div>
    </header>

  <main class="feed-post">
    <section class="photo-name">
      <img alt="capa" class="capa-feed" src="imagens/fundo.jpg"/>
      <img src="${user.photo ? user.photo : 'imagens/astronautrosie.jpg'}" alt="" class="foto-perfil">
      <div class="name-perfil">
        <p id="userName" class="user-perfil">${user.name}</p>
        <p id="typeGame" class="type-person">Jogos Plataforma</p>
      </div>
  </section>
  <section class="post-feed">
      <div class="switch__container">
        <input id="private" class="switch switch--shadow" type="checkbox" />
        <label for="private" class="private-button"></label>
        <p class="post-private">Privado</p>
      </div>
      <textarea type="text" id="postText" name="postText" class="post"></textarea> 
      <div class="button-post">
        <img src="imagens/foto.png" alt="" class="img-photo">
        <button id="createPost" class="play">Compartilhar</button>
      </div>
    </section>
  </main>
  <section class="feed">
      <div id="timeline" class="timeline-feed"></div>
    </section>
</section>
`
};
export default template;