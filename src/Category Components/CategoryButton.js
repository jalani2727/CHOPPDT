import React,{Component} from 'react';


const CategoryButton = (props) =>{
    return (
        <button className ="btn view-work" onClick={props.handler}>GET CATEGORY</button>
    )
}


export default CategoryButton;