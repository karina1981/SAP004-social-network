const template = (user) => {
  return `
<div class="profile">

  <div class="a1 header" >
      <nav id="menu-feed">
        <input id="menu-hamburguer" type="checkbox" class="menu-btn"/>
        <label for="menu-hamburguer" class="menu-icon">
        <span class="nav-icon"></span>
        </label>
        <ul class="menu">
          <li><a href="#profile" class="menu-item">Perfil</a></li>
          <li><a href="#feed" class="menu-item">Feed</a></li>
          <li><a href="#chat" class="menu-item">Chat</a></li>
          <li><a href="#logout" class="menu-item">Sair</a></li>
        </ul>
      </nav>

  </div>

  <div class="b1 header" >
    <img alt="logo-nav" class="logo" src="imagens/logo-name.png"/>
  </div>


  <div class="b2">
    <form enctype="multipart/form-data" onSubmit="return false">
      <img class="imgPhoto" src="${user.photo ? user.photo : 'imagens/foto.png'}" > 
      <input type="file" name="photo" class="inputFilePhoto" style="display:none">
      <div class="al">
        <div class="userName">${user.name}</div>
        <img src="imagens/editar.png" alt="" class="btEdit">
        <input type="text" name="inputEdit" style="display:none">
      </div>
    </form>
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
`
};


export default template;

