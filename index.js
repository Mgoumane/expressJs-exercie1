const express = require("express");
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log(`Serveur lancé, pour y acceder ouvrez http://localhost:${port}`);
});

const ListAuthors = [
    {
      authors: {
        name: "Lawrence Nowell",
        nationality: "UK",
      },
      books: {
        books: "Beowulf",
      },
    },
    {
      authors: {
        name: "William Shakespeare",
        nationality: "UK",
      },
      books: {
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth",
      },
    },
    {
      authors: {
        name: "Charles Dickens",
        nationality: "US",
      },
      books: {
        books: "Oliver Twist, A Christmas Carol",
      },
    },
    {
      authors: {
        name: "Oscar Wilde",
        nationality: "UK",
      },
      books: {
        books: "The Picture of Dorian Gray, The Importance of Being Earnest",
      },
    },
  ];