import React, {component} from 'react';

const Category = (props) =>{
    
    // debugger;
    return(
        <div className="CategoryDisplay">
        <img src={props.value.img}/>
        <p>{props.value.name}</p>
        </div>
    )
}



export default Category;