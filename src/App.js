import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Category from './Category';
import Ingredient from './Ingredient';
import Rounds from './Rounds';
import LandingPage from './LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      categories:[
        "Category1",
        "Category2",
        "Category3",
        "Category4",
        "Category5",
        "Category6",
        "Category7"
      ],
      ingredients:[
        "Ingredient1",
        "Ingredient2",
        "Ingredient3",
        "Ingredient4",
        "Ingredient5",
        "Ingredient6",
        "Ingredient7",
        "Ingredient8",
        "Ingredient9",
        "Ingredient10",
        "Ingredient11",
        "Ingredient12",
        "Ingredient13",
        "Ingredient14",
        "Ingredient15"
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
          <button>Get Categories</button>
              <p>"Sweet Redemption"</p>
              <Category/>
          </div>
            {/* Right Side */}
          <div className="Ingredients">
          <button>Get Ingredients</button>
              <p>Chicken</p>
              <Ingredient/>
              <p>Tikka Masala Sauce</p>
              <Ingredient/>
              <p>Jelly Beans</p>
              <Ingredient/>
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
    this.setState({

    })
  }

  _setIngredients = () => {

  }
}

export default App;
