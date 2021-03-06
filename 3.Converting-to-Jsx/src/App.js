import React from 'react'
import { render } from 'react-dom';
import  Pet  from './Pet';

const App = () => { 
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt-me"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="sonething-important">Adopt-Me!</h1>
      {/* Self Closing Tags are must in React ! */}
      <Pet name="Luna"   animal="Dog"  breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
      <Pet name="Doink"  animal="Cat"  breed="Mixed"    />
    </div>
  )
};

render(<App />, document.getElementById("root"));
