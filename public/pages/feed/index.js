import template from './template.js'
import postTemplate from './postTemplate.js'

const render = (user) => {
  const container = document.createElement('div');

  container.innerHTML = template(user);

  return container;
}

const createPost = () => {
  const text = document.getElementById('postText').value
  const privatePost = document.getElementById('private').checked
  const userId = firebase.auth().currentUser.uid
  const userName = document.getElementById('userName').innerHTML
  const post = {
    text,
    userId,
    userName,
    private: privatePost,
    created: new Date(),
    comments: [],
    whoLiked: [],
  }
  firebase.firestore().collection('posts').add(post).then(() => {
    document.getElementById('postText').value = ''
  });
}

const likePost = () => {
  const id = event.target.dataset.id;
  const userId =  firebase.auth().currentUser.uid
  firebase.firestore().collection('posts').doc(id).get()
    .then((post) => {
      const whoLiked = post.data().whoLiked
      const userAlreadyLiked = whoLiked.includes(userId)
      if (!userAlreadyLiked){
        whoLiked.push(userId)
        firebase.firestore().collection('posts').doc(id).update({
          whoLiked,
        });
      }
    
    });
}

const commentPost = (id, text) => {
  firebase.firestore().collection('posts').doc(id).get()
    .then((post) => {
      const comments = post.data().comments;
      const userName = firebase.auth().currentUser.displayName
      const userId =  firebase.auth().currentUser.uid
      const comment = { text, userName, userId}


      comments.push(comment)
      firebase.firestore().collection('posts').doc(id).update({
        comments,
      });
    });
}

const deletePost = (event) => {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
}

const addDeleteEvent = (post) => {
  const deleteButton = document.getElementById(`delete-${post.id}`)
  if (deleteButton) {
    deleteButton.addEventListener('click', deletePost)
  }
}

const postEditEvent = (event) => {
  const id = event.target.dataset.id;

  console.log("postEvent", id,event.target)
  const postContent = document.getElementById(`post-text-${id}`)
  postContent.contentEditable = true;
  postContent.addEventListener('keyup', function (e) {
    const key = e.keyCode;
    if(key==13){
      editPost(id, postContent.innerText)
      postContent.contentEditable = false;
    }
  })
}

const editPost = (id, text) => {
  firebase.firestore().collection('posts').doc(id).get()
    .then(() => {
      firebase.firestore().collection('posts').doc(id).update({
        text,
      });
    });
};


const addPostEditEvent = (post) => {
  const editButton = document.getElementById(`edit-${post.id}`)
  if (editButton) {
    editButton.addEventListener('click', postEditEvent)
  }
}

const commentEditEvent = (event) => {
  const id = event.target.dataset.id;
  const index = event.target.dataset.index;
  const commentContent = document.getElementById(`comment-text-${id}-${index}`)
  if (commentContent) {
    commentContent.contentEditable = true;
    commentContent.addEventListener('keyup', function (e) {
      const key = e.keyCode;
      if(key==13){
        editComment(id, commentContent.innerText, index)
        commentContent.contentEditable = false;
      }
    })
  }
}

const editComment = (id, text, index) => {
  firebase.firestore().collection('posts').doc(id).get()
    .then((post) => {
      const comments = post.data().comments;
      comments[index].text = text;
      firebase.firestore().collection('posts').doc(id).update({
        comments,
      });
    });
};


const addCommentEditEvent = (post) => {
  post.comments.forEach( (item, index) => {
    const editButton = document.getElementById(`edit-comment-${post.id}-${index}`)
    if (editButton) {
      editButton.addEventListener('click', commentEditEvent)
    }
  })
}

const addLikeEvent = (post) => {
  const likeButton = document.getElementById(`like-${post.id}`)
  if (likeButton) {
    likeButton.addEventListener('click', likePost)
  }
}

const showCommentButton = (post) => {
  const commentButton = document.getElementById(`comments-${post.id}`)

  if (commentButton) {
    commentButton.addEventListener('click', () => {
      const newCommentContainer = document.getElementById(`newCommentContainer-${post.id}`)
      newCommentContainer.classList.toggle('show')
    })
  }
}

const addComment = (post) => {
  const inputEnter = document.getElementById(`addComment-${post.id}`);

  if (inputEnter) {
    inputEnter.addEventListener('keyup', function (e) {
      var key = e.keyCode;
      if (key == 13) { // codigo da tecla enter
        commentPost(post.id, inputEnter.value)
      }
    });
  }
}


const deleteComment= (event) => {
  const id = event.target.dataset.id;
  const commentIndex = event.target.dataset.index;
  firebase.firestore().collection('posts').doc(id).get()
    .then((post) => {
      const comments = post.data().comments;
      comments.splice(commentIndex, 1);
      firebase.firestore().collection('posts').doc(id).update({
        comments,
      });
    });
}

const addCommentDeleteEvent = (post) => {
  if (post.comments) {
    post.comments.forEach( (item, index) => {
      const deleteButton = document.getElementById(`delete-comment-${post.id}-${index}`)
      if (deleteButton) {
        deleteButton.addEventListener('click', deleteComment)
      }
    })
  }
}


const addEvents = (post) => {
  addLikeEvent(post);
  addDeleteEvent(post);
  showCommentButton(post);
  addComment(post);
  addCommentDeleteEvent(post);
  addPostEditEvent(post);
  addCommentEditEvent(post);
}

const showFeed = () => {
  const currentUser = firebase.auth().currentUser.uid
  const timeline = document.getElementById('timeline')

  firebase.firestore()
  .collection("users")
  .orderBy("user_uid", "asc")
  .onSnapshot((docUsers) => {
    let users = {}
    docUsers.forEach((doc) => {
      let user = doc.data()
      users[user.user_uid] = user
    })


    firebase.firestore()
      .collection("posts")
      .orderBy('created', 'desc')
      .onSnapshot(function (querySnapshot) {
        var posts = [];
        querySnapshot.forEach(function (doc) {
          const post = doc.data()
          post.id = doc.id
          post.currentUser = currentUser
          post.user = users[post.userId]
  
          let comments = []
          post.comments.forEach((comment) => {
            comments.push({user: users[comment.userId], ...comment})
          });
          post.comments = comments

          if (post.private && post.userId === currentUser) {
            posts.push(post);
          } else if (!post.private) {
            posts.push(post)
          }
        });
  
        const content = posts.map(postTemplate)
        timeline.innerHTML = content.join('');
        posts.forEach(addEvents)
      });
  })


}

const init = () => {
  const postButton = document.getElementById('createPost');
  postButton.addEventListener('click', createPost);
  showFeed();
}

export default {
  render,
  init,
}