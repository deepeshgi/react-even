import {DECK} from './types';

export const fetchDeckSuccess = deckJson => {

    const {remaining, deck_id} = deckJson;
    return {type: DECK.FETCH_SUCCESS, remaining, deck_id};
}

export const fetchDeckError = error => {
    return {type: DECK.FETCH_ERROR, message: error.message};
}

//returns a function reference having dispatch as parameter
export const fetchNewDeck = () => dispatch => {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
        .then(response => {
            if(response.status !== 200) {
                console.log('error')
                throw new Error('Unsuccessfull DECK of Cards Call');
            }
            return response.json()})
        .then(json => dispatch(fetchDeckSuccess(json)))
        .catch(error => dispatch(fetchDeckError(error)));
}