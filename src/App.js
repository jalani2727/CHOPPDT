import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Category from './Category Components/Category';
import CategoryButton from './Category Components/CategoryButton';
import Ingredient from './Ingredient Components/Ingredient';
import IngredientButton from './Ingredient Components/IngredientButton';
import Rounds from './Rounds Components/Rounds';
import SetRound from './Rounds Components/SetRound';

import LandingPage from './LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      

      categories:[
        
        {name: "Sandwiches", img:"./img/relevantimage"},
        {name: "MAKE. IT. SPICY.", img:"./img/relevantimage"},
        {name: "Would A Small Child Like This?", img:"./img/relevantimage"},
        {name: "Wok This Way (Wok Mandatory)", img:"./img/relevantimage"},
        {name: "MAKE. IT. SWEET.", img:"./img/relevantimage"},
        {name: "Gotta Grill It!", img:"./img/relevantimage"},
        {name: "Freestyle!", img:"./img/relevantimage"},
        {name: "Christmas Style", img:"./img/relevantimage"}
      ],

      selectedCategories:[
        {name:"", img:""}
      ],

      ingredients:[
        
        {name:"Ingredient1", img:"./img/relevantimage"},
        {name:"Ingredient2", img:"./img/relevantimage"},
        {name:"Ingredient3", img:"./img/relevantimage"},
        {name:"Ingredient4", img:"./img/relevantimage"},
        {name:"Ingredient5", img:"./img/relevantimage"},
        {name:"Ingredient6", img:"./img/relevantimage"},
        {name:"Ingredient7", img:"./img/relevantimage"},
        {name:"Ingredient8", img:"./img/relevantimage"},
        {name:"Ingredient9", img:"./img/relevantimage"},
        {name:"Ingredient10", img:"./img/relevantimage"},
        {name:"Ingredient11", img:"./img/relevantimage"},
        {name:"Ingredient12", img:"./img/relevantimage"},
        {name:"Ingredient13", img:"./img/relevantimage"},
        {name:"Ingredient14", img:"./img/relevantimage"},
        {name:"Ingredient15", img:"./img/relevantimage"}
      ],

      selectedIngredients:[
        {name:"", img:""},
        {name:"", img:""},
        {name:"", img:""}
      ],



      AppetizerRound:[
        {name:"", img:""},
        {name:"", img:""},
        {name:"", img:""}
      ],

      EntreeRound:[
        {name:"", img:""},
        {name:"", img:""},
        {name:"", img:""}
      ],

      DessertRound:[
        {name:"", img:""},
        {name:"", img:""},
        {name:"", img:""}
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
          <Category value={this.state.selectedCategories[0]}/>
      </div>

      {/* Right Side */}
      <div className="Ingredients">
          <IngredientButton handler={this._setAllIngredients}/>
          
          <Ingredient value={this.state.selectedIngredients[0]}/>
          <Ingredient value={this.state.selectedIngredients[1]}/>
          <Ingredient value={this.state.selectedIngredients[2]}/>
          
      </div>

    </div>


            {/* display the three rounds here */}
            {/* Need them to display different content. Best way? */}
          
    <div className="Rounds">
      <section className="Appetizer">
        <SetRound handler={()=> this._setRounds("AppetizerRound")}/>
        <p>Appetizer</p>

        {this.state.AppetizerRound.map((AppetizerRound) => 
          <Rounds value={AppetizerRound}/>
        )}

        {/* <Rounds value={this.state.AppetizerRound[0]}/> 
        <Rounds value={this.state.AppetizerRound[1]}/> 
        <Rounds value={this.state.AppetizerRound[2]}/>  */}
     
      </section>

      <section className="Entree">
      <SetRound handler={()=> this._setRounds("EntreeRound")}/>
        <p>Entree</p>
        {this.state.EntreeRound.map((EntreeRound) => 
          <Rounds value={EntreeRound}/>
        )}
      </section>

      <section className="Dessert">
      <SetRound handler={()=> this._setRounds("DessertRound")}/>
        <p>Dessert</p>
        {this.state.DessertRound.map((DessertRound) => 
          <Rounds value={DessertRound}/>
        )}
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
    let newarray=[];
    var randomCategory = this.state.categories[Math.floor(Math.random() * this.state.categories.length)];
    newarray.push(randomCategory);
    this.setState(
      {
        selectedCategories:newarray
      }
    )
  }

_setAllIngredients= () =>{
   let newarray=[];
   var randomIngredient1 = this.state.ingredients[Math.floor(Math.random() * this.state.ingredients.length)];
   newarray.push(randomIngredient1);
   var randomIngredient2 = this.state.ingredients[Math.floor(Math.random() * this.state.ingredients.length)];
   newarray.push(randomIngredient2);
   var randomIngredient3 = this.state.ingredients[Math.floor(Math.random() * this.state.ingredients.length)];
   newarray.push(randomIngredient3);

 
  this.setState(
    {
      selectedIngredients:newarray
    }
  )
}

_setRounds =(whichRound) => {
  let newarray=[];
  let appetizerIngredient1 = this.state.selectedIngredients[0];
  newarray.push(appetizerIngredient1)
  let appetizerIngredient2 = this.state.selectedIngredients[1];
  newarray.push(appetizerIngredient2)
  let appetizerIngredient3 = this.state.selectedIngredients[2];
  newarray.push(appetizerIngredient3)

  this.setState(
    {
      [whichRound]:newarray
    }
  )
}


  
}

export default App;
