import React from "react";
import List from "./components/List";

const characters = [
  {
    id: 1,
    name: "Ariel",
    image: "../public/img/Ariel.jpg",
    picked: false,
  },
  {
    id: 2,
    name: "Jiminy Cricket",
    image: "../public/img/cricket.jpg",
    picked: false,  
  },
  {
    id: 3,
    name: "Donald Duck",
    image: "../public/img/donald.jpg",
    picked: false,
  },
  {
    id: 4,
    name: "Dumbo",
    image: "../public/img/dumbo.jpg",
    picked: false,
  },
  {
    id: 5,
    name: "Goofy",
    image: "../public/img/goofy.jpg",
    picked: false,
  },
  {
    id: 6,
    name: "Mickey Mouse",
    image: "../public/img/mickey.jpg",
    picked: false,
  },
  {
    id: 7,
    name: "Minnie Mouse",
    image: "../public/img/minnie.jpg",
    picked: false,
  },
  {
    id: 8,
    name: "Olaf",
    image: "../public/img/Olaf.jpg",
    picked: false,
  },
  {
    id: 9,
    name: "Pluto",
    image: "../public/img/pluto.jpg",
    picked: false,  
  },   
  {
    id: 10,
    name: "Scrooge McDuck",
    image: "../public/img/Scrooge.jpg",
    picked: false,  
  },   
  {
    id: 11,
    name: "Stitch",
    image: "../public/img/stitch.jpg",
    picked: false,  
  },   
  {
    id: 12,
    name: "Huey, Dewey, and Louie",
    image: "../public/img/triplets.jpg",
    picked: false,
  },   
];

const App = () => <List characters={characters} />;

export default App;
