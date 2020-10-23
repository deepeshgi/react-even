import {    
    DECK
} from '../actions/types';
import fetchStates from '../reducers/fetchStates';

const DEFAULT_DECK = {
    deck_id: '', remaining: 0, message: '', fetchState: ''
}
//Reducer
const deckReducer =(state = DEFAULT_DECK, action)=> {
    console.log('deckReducer:action', action);
    switch(action.type) {        
        case DECK.FETCH_SUCCESS:
            const {remaining, deck_id} = action;
            return {
                ...state, remaining, deck_id, fetchState: fetchStates.success
            }

        case DECK.FETCH_ERROR:            
            return {...state, message: action.message, fetchState: fetchStates.error}
        default: 
            return state;
    }
}

export default deckReducer;