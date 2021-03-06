import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 3rd-Party Components
import ScrollableAnchor from 'react-scrollable-anchor'


// Components
import Category from './Category Components/Category';
import CategoryButton from './Category Components/CategoryButton';
import Ingredient from './Ingredient Components/Ingredient';
import IngredientButton from './Ingredient Components/IngredientButton';
import Rounds from './Rounds Components/Rounds';
import SetRound from './Rounds Components/SetRound';

import LandingPage from './LandingPage';

// Images
// Use the variable names you import in the img: state attribute and they will appear!
        // Ingredients
import vodka from "./img/Ingredients/Vodka_Shots.jpg";



        // Categories
import sandwiches from "./img/Categories/sandwiches.jpeg";
import spicy from "./img/Categories/spicy.jpeg";
import smallchild from "./img/Categories/smallchild.jpeg";
import wok from "./img/Categories/wok.jpeg";
import sweet from "./img/Categories/sweet.jpeg";
import breakfast from "./img/Categories/breakfast.jpeg";
import grill from "./img/Categories/grill.jpeg";
import soup from "./img/Categories/soup.jpeg";
import healthy from "./img/Categories/healthy.jpeg";

















class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      

      categories:[
        
        {name: "Sandwiches!", img:sandwiches},
        {name: "MAKE. IT. SPICY.", img:spicy},
        {name: "Would A Small Child Like This?", img:smallchild},
        {name: "Wok This Way (Wok Mandatory)", img:wok},
        {name: "MAKE. IT. SWEET.", img:sweet},
        {name: "Gotta Grill It!", img:grill},
        {name: "Soups", img:soup},
        {name: "Healthy-Eats", img:healthy},
        {name: "Breakfast", img:breakfast}
      ],

      selectedCategories:[
        {name:"", img:""}
      ],

      ingredients:[
        
        {name:"Eggplant", img:"./img/relevantimage"},
        {name:"Bagel", img:"./img/relevantimage"},
        {name:"Raisins", img:"./img/relevantimage"},
        {name:"Ginger", img:"./img/relevantimage"},
        {name:"Parsley", img:"./img/relevantimage"},
        {name:"Sweet Potato", img:"./img/relevantimage"},
        {name:"Curry Powder", img:"./img/relevantimage"},
        {name:"Macaroni & Cheese", img:"./img/relevantimage"},
        {name:"Tuna", img:"./img/relevantimage"},
        {name:"Popcorn", img:"./img/relevantimage"},
        {name:"Carrots", img:"./img/relevantimage"},
        {name:"Jalapeños", img:"./img/relevantimage"},
        {name:"Ice Cream Sandwich", img:"./img/relevantimage"},
        {name:"Radish", img:"./img/relevantimage"},
        {name:"Baked Beans", img:"./img/relevantimage"},
        {name:"Frozen Peas", img:"./img/relevantimage"},
        {name:"Cheerios", img:"./img/relevantimage"},
        {name:"Cinnamon Toast Crunch", img:"./img/relevantimage"},
        {name:"Kimchi", img:"./img/relevantimage"},
        {name:"Ground Beef", img:"./img/relevantimage"},
        {name:"Tomato Soup", img:"./img/relevantimage"},
        {name:"Cheetos", img:"./img/relevantimage"},
        {name:"Canned Icing", img:"./img/relevantimage"},
        {name:"Canned Chicken Noodle Soup", img:"./img/relevantimage"},
        {name:"Cool Whip", img:"./img/relevantimage"},
        {name:"Broccoli", img:"./img/relevantimage"},
        {name:"Cranberries", img:"./img/relevantimage"},
        {name:"Instant Potatoes", img:"./img/relevantimage"},
        {name:"Maple Syrup", img:"./img/relevantimage"},
        {name:"Insant Ramen", img:"./img/relevantimage"},
        {name:"Eggos", img:"./img/relevantimage"},
        {name:"One Human Foot", img:"./img/relevantimage"},
        {name:"Bananas", img:"./img/relevantimage"},
        {name:"Lettuce", img:"./img/relevantimage"},
        {name:"Mayonnaise", img:"./img/relevantimage"},
        {name:"Oreos", img:"./img/relevantimage"},
        {name:"White Rice", img:"./img/relevantimage"},
        {name:"Pasta Noodles", img:"./img/relevantimage"},
        {name:"Frozen Grapes", img:"./img/relevantimage"},
        {name:"Black Beans", img:"./img/relevantimage"},
        {name:"Lentils", img:"./img/relevantimage"},
        {name:"Quinoa", img:"./img/relevantimage"},
        {name:"Leftover Item from the Fridge", img:"./img/relevantimage"},
        {name:"Bacon", img:"./img/relevantimage"},
        {name:"Brie", img:"./img/relevantimage"},
        {name:"Gouda", img:"./img/relevantimage"},
        {name:"Goldfish", img:"./img/relevantimage"},
        {name:"Zebra Cakes", img:"./img/relevantimage"},
        {name:"One Hot Pocket", img:"./img/relevantimage"},
        {name:"Frozen Sausage", img:"./img/relevantimage"},
        {name:"Ketchup", img:"./img/relevantimage"},
        {name:"Blackberry Jam", img:"./img/relevantimage"},
        {name:"Chick Peas", img:"./img/relevantimage"},
        {name:"Salmon", img:"./img/relevantimage"},
        {name:"Hot Sauce", img:"./img/relevantimage"},
        {name:"Sliced Turkey", img:"./img/relevantimage"},
        {name:"Sliced Pepperoni", img:"./img/relevantimage"},
        {name:"Onions", img:"./img/relevantimage"},
        {name:"Hair from a Shower Drain", img:"./img/relevantimage"},
        {name:"Pretzels", img:"./img/relevantimage"},
        {name:"Udon Noodles", img:"./img/relevantimage"},
        {name:"Apple Cider Vinegar", img:"./img/relevantimage"},
        {name:"Lemon Curd", img:"./img/relevantimage"},
        {name:"Spinach", img:"./img/relevantimage"},
        {name:"Chicken Wings", img:"./img/relevantimage"},
        {name:"Popcorn Shrimp", img:"./img/relevantimage"},
        {name:"Entire Pepper", img:"./img/relevantimage"},
        {name:"Salsa", img:"./img/relevantimage"},
        {name:"Chicken Breast", img:"./img/relevantimage"},
        {name:"Frozen French-Fries", img:"./img/relevantimage"},
        {name:"Maraschino Cherries", img:"./img/relevantimage"},
        {name:"Beer", img:"./img/relevantimage"},
        {name:"Cheddar Cheese", img:"./img/relevantimage"},
        {name:"Coconut Water", img:"./img/relevantimage"},
        {name:"Walnuts", img:"./img/relevantimage"},
        {name:"Oatmeal", img:"./img/relevantimage"},
        {name:"Honey", img:"./img/relevantimage"},
        {name:"Lemon", img:"./img/relevantimage"},
        {name:"Pancake Mix", img:"./img/relevantimage"},
        {name:"Vodka", img:vodka},
        {name:"Grape Licorice", img:vodka},
        {name:"Edamame", img:vodka},
        {name:"Cinnamom Whiskey", img:vodka},
        {name:"Soy Sauce", img:vodka},
        {name:"Mixed Greens", img:vodka},
        {name:"Orange Sherbet", img:vodka}
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
    <div className="App">
        <ScrollableAnchor id={'Quote'}>
        <div className="Quote">
            <h1>WHAT'S IT GONNA BE?</h1>
        </div>
        </ScrollableAnchor>
    </div>
      
      {/* Entire mid-section */}
    <div id="StartGame" className= "categoriesAndIngredients">

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
        <p>Appetizer</p>
        <SetRound handler={()=> this._setRounds("AppetizerRound")}/>

        {this.state.AppetizerRound.map((AppetizerRound) => 
          <Rounds value={AppetizerRound}/>
        )}

        {/* <Rounds value={this.state.AppetizerRound[0]}/> 
        <Rounds value={this.state.AppetizerRound[1]}/> 
        <Rounds value={this.state.AppetizerRound[2]}/>  */}
      </section>

      <section className="Entree">
        <p>Entree</p>
      <SetRound handler={()=> this._setRounds("EntreeRound")}/>
        {this.state.EntreeRound.map((EntreeRound) => 
          <Rounds value={EntreeRound}/>
        )}
      </section>

      <section className="Dessert">
        <p>Dessert</p>
      <SetRound handler={()=> this._setRounds("DessertRound")}/>
        {this.state.DessertRound.map((DessertRound) => 
          <Rounds value={DessertRound}/>
        )}
      </section>
    </div>

    <footer>
    <p>Props to The Food Network™ &lt;3 </p>
    <a href="https://jalanipaul.surge.sh">Author's Portolio</a>
    </footer>

  </div>
</div>
    );
  }

// This takes a category from the state category and pushes it to an empty array. The state of the element running the function becomes what as been pushed to the empty array in the function
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

  // This is built the same way as the above function execpt the array receives three items which will appear in the section that is utilizing this function
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
