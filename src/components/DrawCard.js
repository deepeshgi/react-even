import React from 'react';
import {connect} from 'react-redux';

const DrawCard = props => {
    console.log('Draw Card props', props);
    return (
        <div>
            <button>Draw the next card!</button>
        </div>
    )
}

export default connect(
    //({deck: {deck_id}}) => ({deck_id}) - this is shorter/clean-up form
    state => ({deck_id: state.deck.deck_id})
)(DrawCard);