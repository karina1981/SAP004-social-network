const template = `
<div class="profile">



  <div class="a1 header" >
      <nav id="menu-feed">
        <input id="menu-hamburguer" type="checkbox" class="menu-btn"/>
        <label for="menu-hamburguer" class="menu-icon"><span class="nav-icon"></span></label>
        <ul class="menu">
          <li><a href="#perfil" class="menu-item">Perfil</a></li>
          <li><a href="#feed" class="menu-item">Feed</a></li>
          <li><a href="#chat" class="menu-item">Chat</a></li>
          <li><a href="#login" class="menu-item">Sair</a></li>
        </ul>
      </nav>
  </div>
  <div class="b1 header" >
    <img alt="logo-nav" class="feed-logo" src="imagens/logo-name.png"/>
  </div>
  <div class="c1 header" >
    <a href="#login" class="menu-item">Sair</a>
  </div>


  <div class="b2">
    <img src="imagens/foto.png" width="100">
    <div>nome jogador</div>
  </div>

  <div class="b3">
    <div>
      <img src="imagens/formacao-01.png" alt="" class="img3">
      <span>Formação</span>
    </div>
    <div>
      <img src="imagens/profissao-01.png" alt="" class="img3">
      <span>Profissão</span>
    </div>
    <div>
      <img src="imagens/home-01.png" alt="" class="img3">
      <span>Estado</span>
    </div>
  </div>

  <div class="b4">
    <div>
      <textarea class="textArea4" id="textArea4" name="textArea4" rows="10" cols="90"></textarea>
    </div>
    <div>
      <img src="imagens/comentar.png" width="100">
      <img src="imagens/compartilhar.png" width="100">
      <img src="imagens/lixo-01.png" width="100">
    </div>
  </div>


</div>
`;

export default template;

