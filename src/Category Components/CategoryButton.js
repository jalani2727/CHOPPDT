import React,{Component} from 'react';


const CategoryButton = (props) =>{
    return (
        <button onClick={props.handler}>Get Categories</button>
    )
}


export default CategoryButton;