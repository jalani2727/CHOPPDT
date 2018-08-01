import React, {Component} from 'react';

// This structure might not be identical to the CatergoryButton structure.

const IngredientButton = (props) =>{
    return (
        <button className ="btn view-work" onClick={props.handler}>GET INGREDIENTS</button>
    )
}



export default IngredientButton;