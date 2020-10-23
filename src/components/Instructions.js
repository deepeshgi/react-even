import React from 'react';
import {connect} from 'react-redux';
import {expandInstructions, cancelInstructions} from '../actions/settings';

const Instructions = props => {

    const {instructionsExpanded, expandInstructions, cancelInstructions} = props;

    if(instructionsExpanded) {
        return(
            <div>
                <h3>Instructions</h3>
                <p>Welcome to evens and odds. This is a card game</p>
                <p>Select even or odd</p>
                <br/>
                <button onClick={cancelInstructions}>Show less</button>
            </div>
        );        
    }
    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to evens and odds. This ...</p>               
            <br/>
            <button onClick={expandInstructions}>Read more</button>
        </div>
    )
}

const mapStateToProps = state => {

    return {instructionsExpanded: state.settings.instructionsExpanded}
}

const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        cancelInstructions: () => dispatch(cancelInstructions())
    }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(Instructions);