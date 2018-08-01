import React, {Component} from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

// This structure might not be identical to the CatergoryButton structure.

const IngredientButton = (props) =>{
    return (
        <ScrollableAnchor id={'backToIngredients'}>
        <a href="#goToSetRound" className ="btn view-work" onClick={props.handler}>GET INGREDIENTS</a>
        </ScrollableAnchor>
    )
}



export default IngredientButton;