import React, {component} from 'react';

const Rounds = (props) => {
console.log(props);
    return (
      <div>
          <ul>
              <li>{props.value.name}</li>
          </ul>
         
    
      </div>
      
    )
}



export default Rounds;