// Aqui serão criados os eventos de Manipulação de DOM e templates
// import { createPost } from './data.js';

export const home = () => {
  const container = document.createElement('div');
console.log("entou na home")
  container.innerHTML = `
  <header>
    <nav class="btUp">
      <li>MENU</li>
      <nav id="menu">
        <ul>
            <li><a href="#">PERFIL</a></li>
            <li><a href="#">CHAT</a></li>
            <li><a href="#">CHAT</a></li>
            <li><a href="#login">SAIR</a></li>
            
        </ul>
    </nav>
      <img src="img/sheGames.png" >
      
    </nav>
  </Header>
  <main>
  <section>
  
  </section>
  </main>
    <form>
      <input id='posts' type='text'>
      <button id='send-post>POSTAR</button>
    </form>
    <div id='all-posts'></div>
  `;

  // const post = container.querySelector('#post');
  // const sendBtn = container.querySelector('#send-post');
  // const allPosts = container.querySelector('#all-posts');

  // sendBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   createPost(post.value);
  // //   // greetingMessage.innerHTML = greeting(name.value);
  // });

  return container;
};
