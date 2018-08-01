import React, {component} from 'react';

const Category = (props) =>{
    
    // debugger;
    return(
        <div className="CategoryDisplay">
        <img src={props.value.img} alt="Click to Start!"/>
        <p>{props.value.name}</p>
        </div>
    )
}



export default Category;