import React, {component} from 'react';

const Ingredient = (props) => {
    console.log(props);
    // debugger;
    return(
        <div>
        <img src={props.value.img}/>
        <p>{props.value.name}</p>
        </div>
    )
}



export default Ingredient;