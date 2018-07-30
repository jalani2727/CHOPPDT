import React, {Component} from 'react';

// This structure might not be identical to the CatergoryButton structure.

const IngredientButton = (props) =>{
    return (
        <button onClick={props.handler}>Get Ingredients</button>
    )
}



export default IngredientButton;