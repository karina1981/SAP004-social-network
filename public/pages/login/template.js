const template = `
<div class="flexContent">
  <div class="btUp">
    <img src="img/logo.png" >
    <img src="img/sheGames.png" >
  </div>

  <div class="login">
    <form>
      <div class="rowEmail">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="exemplo@gmail.com"/>
      </div>
      <div class="rowPassword">
        <label for="senha">Senha</label>
        <input type="password" id="senha" name="senha"/>
        <span>Esqueci minha senha</span>
      </div>
      <div class="btEnterDv">
        <button class="btEnter" type="button">Entrar</button>
      </div>
    </form>
    <div class="btDow">
      <a><img class="btGoogle" src="img/icoGoogle.png" ></a>
      
      <img class="btFacebook" src="img/icoFacebook.png" >
    </div>
  <div class="newA">
    <span>Não tem uma conta?</span>
    <a class="aa" href="#register">CRIAR CONTA</a>
  </div>



  <div id="firebaseui-auth-container">
  </div>
</div>
`;
export default template;


