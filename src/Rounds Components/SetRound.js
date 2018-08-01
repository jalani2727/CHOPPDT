import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const SetRound = (props) => {
    return (
        <ScrollableAnchor id={"goToSetRound"}>
        <a href="#Quote"className ="btn view-work" onClick={props.handler}>SET ROUND</a>
        </ScrollableAnchor>
    )
}





export default SetRound;