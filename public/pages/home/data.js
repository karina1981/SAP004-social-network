// Aqui serão exportadas as funções que irão ser usadas
// export const greeting = name => `Oi ${name}! Que bom ver você aqui!`;
const createPost = (text) => {
    firebase.firestore().collection("post").add({
      text: "text",
      likes: 0,
      name: "ka"
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });

} 