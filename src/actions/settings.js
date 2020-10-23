import {SET_GAME_STARTED, SET_EXPAND_INSTRUCTIONS} from './types';

export const startGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: true}
};

export const cancelGame = () => {
    return { type: SET_GAME_STARTED, gameStarted: false}
};

export const expandInstructions = () => {
    return { type: SET_EXPAND_INSTRUCTIONS, instructionsExpanded: true}
};

export const cancelInstructions = () => {
    return { type: SET_EXPAND_INSTRUCTIONS, instructionsExpanded: false}
};