import React, { useState } from 'react';
import Title from './components/Title';
import Pokemon from './components/Pokemon/Pokemon';
import LikeCounter from './components/LikeCounterj';
import Animals from './components/AwesomeAnimals';
import ArticleCard from './components/ArticleCard';
import ArticleList from './components/ArticleLists';

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"]
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"]
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"]
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"]
  }
];



function App() {
  const answerArray = useState('yes');

  return (
    <div className="App container">
      <Title content="Some Simple Title" />
      <LikeCounter />
      <Animals />
      <ArticleList />
      <main>
        <Title content="Example title" />
        <div className="row">
          {all_pokemon.map(function (species) {
            return <div className="col-md-6 col-lg-4">
              <Pokemon name={species.name} weight={species.weight} awesome={species.awesome} terrifying={species.terrifying} abilities={species.abilities} />
            </div>
          })}
        </div>

      </main>
    </div>
  );
}

export default App;
