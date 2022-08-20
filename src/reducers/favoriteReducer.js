import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from '../actions/favoritesActions'

export const initialState = {
    favorites: [{
        title: 'Hello',
        id: 12
    }],
    displayFavorites: true
}

export const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case(TOGGLE_FAVORITES):
        return({
            ...state,
            displayFavorites: !state.displayFavorites
        })
        case(ADD_FAVORITE):
            return({
                ...state,
                favorites: [...state.favorites, action.payload]
            })
        case(REMOVE_FAVORITE):
            return({
                ...state,
                favorites: state.filter(itm => itm.id !== action.payload)
            })
        default:
            return(state)
    }
}

export default favoriteReducer


// favorites: [...state.favorites, state.favorites.concat(movie)]