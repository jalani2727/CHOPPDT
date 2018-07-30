import React, {component} from 'react';

const Category = (props) =>{
    console.log(props);
    // debugger;
    return(
        <div className="Category">
        <img src={props.value.img}/>
        <p>{props.value.name}</p>
        </div>
    )
}



export default Category;