import React, {component} from 'react';

const Ingredient = (props) => {
 
    // debugger;
    return(
        <div>
        <div className="ingredientDisplay">
        <img src={props.value.img} alt="Click to Start!"/>
        </div>
        <div>
        <p>{props.value.name}</p>
        </div>
        </div>
    )
}



export default Ingredient;