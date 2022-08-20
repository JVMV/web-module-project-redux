import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { connect } from'react-redux';
import { favoriteReducer, initialState } from '../reducers/favoriteReducer';
import * as action from '../actions/favoritesActions';

const MovieHeader = (props) => {
    const [state, dispatch] = useReducer(favoriteReducer, initialState);
    const appTitle = props.appTitle;
    const displayFavorites = props.displayFavorites;
    const { toggleFavorites } = action;

    const favoriteButton = () => {
        dispatch(toggleFavorites)
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={favoriteButton} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

export default connect(st => ({
    appTitle: st.movieReducer.appTitle, 
    displayFavorites: st.favoriteReducer.displayFavorites
}, action))(MovieHeader);