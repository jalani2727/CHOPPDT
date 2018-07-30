import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Category from './Category Components/Category';
import CategoryButton from './Category Components/CategoryButton';
import Ingredient from './Ingredient Components/Ingredient';
import Rounds from './Rounds Components/Rounds';
import IngredientButton from './Ingredient Components/IngredientButton';

import LandingPage from './LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      

      categories:[
        {name: "", img:""},
        {name: "Category1", img:"./img/relevantimage"},
        {name: "Category2", img:"./img/relevantimage"},
        {name: "Category3", img:"./img/relevantimage"},
        {name: "Category4", img:"./img/relevantimage"},
        {name: "Category5", img:"./img/relevantimage"},
        {name: "Category6", img:"./img/relevantimage"},
        {name: "Category7", img:"./img/relevantimage"}
      ],

      ingredients:[
        {name:"", img:""},
        {name:"Ingredient1", img:"./img/relevantimage"},
        {name:"Ingredient2", img:"./img/relevantimage"},
        {name:"Ingredient3", img:"./img/relevantimage"},
        {name:"Ingredient4", img:"./img/relevantimage"},
        {name:"Ingredient5", img:"./img/relevantimage"},
        {name:"Ingredient6", img:"./img/relevantimage"},
        {name:"Ingredient7", img:"./img/relevantimage"},
        {name:"Ingredient8", img:"./img/relevantimage"},
        {name:"Ingredient9", img:"./img/relevantimage"},
        {name:"Ingredient10", img:"./img/releveantimage"},
        {name:"Ingredient11", img:"./img/releveantimage"},
        {name:"Ingredient12", img:"./img/releveantimage"},
        {name:"Ingredient13", img:"./img/releveantimage"},
        {name:"Ingredient14", img:"./img/releveantimage"},
        {name:"Ingredient15", img:"./img/releveantimage"}
      ]
    }
  }
  
  
  render() {

    return (
<div className="App">

  <div className="LandingPage">
    <LandingPage/>
  </div>

  <div className="container-fluid">
    <div id="App">
        <div id="Quote">
            <h1>Who will get CHOPPED?</h1>
        </div>
    </div>
      
            {/* Entire mid-section */}
    <div className= "categoriesAndIngredients">

      {/* Left Side */}
      <div className= "Category">
          <CategoryButton handler={this._setCategory}/>
          <Category value={this.state.categories[0]}/>
      </div>

      {/* Right Side */}
      <div className="Ingredients">
          <IngredientButton handler={this._setIngredients}/>
          
          <Ingredient value={this.state.ingredients[0]}/>
          <Ingredient value={this.state.ingredients[0]}/>
          <Ingredient value={this.state.ingredients[0]}/>
          
      </div>

    </div>


            {/* display the three rounds here */}
            {/* Need them to display different content. Best way? */}
          
    <div className="Rounds">
      <section className="Appetizer">
        <p>Appetizer Round</p>
        <Rounds/> 
      </section>
      <section className="Entree">
        <p>Entreé Round</p>
        <Rounds/> 
      </section>
      <section className="Dessert">
        <p>Dessert Round</p>
        <Rounds/>
      </section>
    </div>

    <footer>
    PROPS TO THE BIG HOMIE, THE FOOD NETWORK &lt;3
    </footer>

  </div>
</div>
    );
  }


  _setCategory = () => {
    var randomCategory = this.state.categories[Math.floor(Math.random() * this.state.categories.length)];
    this.setState(
      {
        categories:[randomCategory]
      }
    )
  }

  _setIngredients = () => {
    var randomIngredient1 = this.state.ingredients[Math.floor(Math.random() * this.state.ingredients.length)];
    var randomIngredient2 = this.state.ingredients[Math.floor(Math.random() * this.state.ingredients.length)];
    var randomIngredient3 = this.state.ingredients[Math.floor(Math.random() * this.state.ingredients.length)];
    this.setState(
      {
        ingredients:
          [randomIngredient1, randomIngredient2, randomIngredient3],
        
      }
    )
  }
}

export default App;
