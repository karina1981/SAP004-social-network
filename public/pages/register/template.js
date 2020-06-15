const template = `
<div class="flexContent">
  <div class="btUp">
    <img src="img/logo.png" >
    <img src="img/sheGames.png" >
  </div>


  <div class="pg2">
    <h2>CRIAR CONTA</h2>
      <form class="form" method="post" enctype="multipart/form-data">
        <div class="rowEmail">
          <label for="email">Email</label>
          <input class="create_account" type="text" id="email" name="email" placeholder="exemplo@gmail.com"/>
        </div>

        <div class="rowPassword">
          <label for="senha">SENHA</label>
          <input class="create_account" type="password" id="senha" name="senha"/>
        </div>


        <div class="rowPassword">
          <label for="senha">CONFIRMAR SENHA</label>
          <input class="create_account" type="password" id="ConfSenha" name="senha"/>
        </div>

        <div class="textName">
          <label>NOME</label>
          <input class="create_account" type="text" id="textName">
        </div>

        <div class="textSName">
          <label>SOBRE NOME</label>
          <input class="create_account" type="text" id="textSurname">
        </div>

        <div class="textNick">
          <label>APELIDO</label>
          <input class="create_account" type="text" id="textNick">
        </div>

        <div class="calendar">
          <label>DATA DE NASCIMENTO</label>
          <input class="create_account" id="date" type="date">
          <img src ="img/calendar.png" >
        </div>

        <div class="calendar">
          <label>Imagem</label>
          <input type="file" name="foto">
        </div>

        <div>
          <select name="select">
            <option value="female" selected>Fem</option> 
            <option value="male">Masc</option>
            <option value="other">Outro</option>
          </select> <br>
        </div>

        <div class="yep">
          <input type="radio" id="yes" value="yes">
          <span>ESTOU DE ACORDO COM AS REGRAS DO APLICATIVO</span>
        </div>

        <div class="btEnterDV">
          <button class="btCreateAccount" type="button">CRIAR CONTA</button>
        </div>
      </form>
    </div>
  </div>
</div>

`;

export default template;