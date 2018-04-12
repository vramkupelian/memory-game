import React from "react";
import List from "./components/List";

const characters = [
  {
    id: 1,
    name: "Ariel",
    image: "./img/Ariel.jpg",
    picked: false,
  },
  {
    id: 2,
    name: "Jiminy Cricket",
    image: "./img/cricket.jpg",
    picked: false,  
  },
  {
    id: 3,
    name: "Donald Duck",
    image: "./img/donald.jpg",
    picked: false,
  },
  {
    id: 4,
    name: "Dumbo",
    image: "./img/dumbo.jpg",
    picked: false,
  },
  {
    id: 5,
    name: "Goofy",
    image: "./img/goofy.jpg",
    picked: false,
  },
  {
    id: 6,
    name: "Mickey Mouse",
    image: "./img/mickey.jpg",
    picked: false,
  },
  {
    id: 7,
    name: "Minnie Mouse",
    image: "./img/minnie.jpg",
    picked: false,
  },
  {
    id: 8,
    name: "Olaf",
    image: "./img/Olaf.jpg",
    picked: false,
  },
  {
    id: 9,
    name: "Pluto",
    image: "./img/pluto.jpg",
    picked: false,  
  },   
  {
    id: 10,
    name: "Scrooge McDuck",
    image: "./img/Scrooge.jpg",
    picked: false,  
  },   
  {
    id: 11,
    name: "Stitch",
    image: "./img/stitch.jpg",
    picked: false,  
  },   
  {
    id: 12,
    name: "Huey, Dewey, and Louie",
    image: "./img/triplets.jpg",
    picked: false,
  },   
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
shuffle(characters);
const App = () => <List characters={characters} />;

export default App;
