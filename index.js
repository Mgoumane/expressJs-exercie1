const express = require("express");
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log(`Serveur lancé, pour y acceder ouvrez http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send("Authors API");
})

const listAuthors = [
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

app.get('/authors/:id', (req, res) => {
    switch (req.params.id) {
        case "1":
          res.send("Lawrence Nowell, UK");
          break;
        case "2":
          res.send("William Shakespeare, UK");
          break;
        case "3":
          res.send("Charles Dickens, US");
          break;
        case "4":
          res.send("Oscar Wilde, UK");
          break;
        default:
          res.send(`the author with the ID ${req.params.id} does not exist`);
      }
})

app.get("/authors/:id/books", (req, res) => {
    switch (req.params.id) {
      case "1":
        res.send("Beowulf");
        break;
      case "2":
        res.send("Hamlet, Othello, Romeo and Juliet, MacBeth");
        break;
      case "3":
        res.send("Oliver Twist, A Christmas Carol");
        break;
      case "4":
        res.send("The Picture of Dorian Gray, The Importance of Being Earnest");
        break;
    }
});

app.get("*", (req, res) => {
    res.send("ERROR 404");
});