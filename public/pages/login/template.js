const template = `
  <section class="container">
    <section class="logo-login">
        <div class="logo">
          <img alt="logo" class="control-logo" src="imagens/logo.png"/>
        </div>
        <img alt="logo-name" class="name-logo" src="imagens/logo-name.png"/>
    </section>
    <section class="login">
        <div class="email">
          <label for="email" class="email-login">email</label>
          <input type="text" id="email" name="email-login" class="email-input">
        </div>
        <div class="password">
          <label for="password" class="password-login">senha</label>
          <input type="password" id="password" name="password" class="password-input">
          <span id="loginError" class="error"></span>
        </div>
        <div class="enter-login">
          <button id="login" class="button-log-in">entrar</button>
        </div>
        <div class="enter">
          <p class="enter-with">entrar com</p>
        </div>
        <div class="img-social">
            <img src="imagens/icons-facebook.png" id="loginFacebook" class="login-facebook"/>
            <img src="imagens/icons-google-01.png" id="loginGoogle" class="login-google"/>
        </div>
        <div class="create">
          <p class="create">Não tem uma conta?</p>
          <a href="#register" class="link-create">criar conta</a>
        </div>
      </section>
  </section>
`;
export default template;