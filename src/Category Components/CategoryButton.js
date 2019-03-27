import React,{Component} from 'react';


const CategoryButton = (props) =>{
    return (
        <a className ="btn view-work" onClick={props.handler}>GET CATEGORY</a>
    )
}


export default CategoryButton;