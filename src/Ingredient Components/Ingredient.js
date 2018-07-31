import React, {component} from 'react';

const Ingredient = (props) => {
 
    // debugger;
    return(
        <div className="ingredient">
        <img src={props.value.img}/>
        <p>{props.value.name}</p>
        </div>
    )
}



export default Ingredient;