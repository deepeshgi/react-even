import {
    SET_GAME_STARTED, 
    SET_EXPAND_INSTRUCTIONS,     
} from '../actions/types';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}
//Reducer
const settingsReducer =(state = DEFAULT_SETTINGS, action)=> {
    console.log('settingsReducer:action', action);
    switch(action.type) {
        case  SET_GAME_STARTED: 
        return {
            ...state,
            gameStarted: action.gameStarted,            
        };
        case SET_EXPAND_INSTRUCTIONS: 
        return {
            ...state,
            instructionsExpanded: action.instructionsExpanded
        };
        default: 
            return state;
    }
}

export default settingsReducer;