import createDataContext from './createDataContext';


const scoresReducer = (state, action) => {
    switch (action.type) {
        case 'create_match':
            return [...state, action.payload];
        default: 
            return state;
    }
}

const createMatch = dispatch => {
    return (match) => {
        dispatch({type: 'create_match',payload: match})
    }
}

export const {Context, Provider } = createDataContext(
    scoresReducer,
    { createMatch},
    []
);