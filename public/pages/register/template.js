const template = `
<form enctype="multipart/form-data">
<section class="container">

    <section class="logo-login">
      <div class="logo">
        <img alt="logo" class="control-logo" src="imagens/logo.png"/>
      </div>
      <img alt="logo-name" class="name-logo" src="imagens/logo-name.png"/>
    </section>
         <section class="container-register">
      <h2 class="create-count">Criar conta</h2>
      <div class="content">
        <label for="email" class="email-register">email</label>
        <input type="text" id="email" name="email-login" class="input">
      </div>
      <div class="content">
        <label for="password" class="password-register">senha</label>
        <input type="password" id="password" name="password" class="input">
      </div>
      <div class="content">
        <label for="password-confirm" class="password-confirm">confirmar senha</label>
        <input type="password" id="password-confirm" name="password-confirm" class="input">
      </div>
      <div class="content">
        <label for="name" class="name">Nome</label>
        <input type="text" id="name" class="input">
      </div>
      <div class="content">
        <label for="surname" class="surname">Sobrenome</label>
        <input type="text" id="surname" class="input">
      </div>
      <div class="content">
        <label for="date" class="date">Data de nascimento</label>
        <input type="date" id="date" class="input">
      </div>
      <div class="content">
        <label for="status" class="status">Status Relacionamento</label>
        <input type="text" id="status" class="input">
      </div>
      <div class="content-gender">
        <label for="gender" class="gender-class">Como você se identifica?</label>
        <div class="man">
          <input type="radio" name="radio" id="gender-masc" class="gender-camp">
          <label for="gender-masc" class="gender">Masculino</label>
        </div>
          <div class="female">
          <input type="radio" name="radio" id="gender-fem" class="gender-camp">
          <label for="gender-fem" class="gender">Feminino</label>
        </div>
        <div class="other">
          <input type="radio" name="radio" id="gender-outher" class="gender-camp" valor="outher">
          <label for="gender-outher" class="gender">Outro</label>
        </div>
      </div>
      <div class="img_photo">
        <label for="photo" class="´photo-class">Envie uma foto</label>
        <input type="file" name="photo" class="photo-camp">    
      </div>
      <button type="button" id="register" class="register-button">Criar conta</button>
      <span id="loginError" class="error"></span> 
      <a href="#" class="button-back">Voltar para o login</a>
    </section>

    </section>
</section>  
</form>
`;

export default template;