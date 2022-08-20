import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { favoriteReducer, initialState } from '../reducers/favoriteReducer';


const FavoriteMovieList = (props) => {
    const [state, dispatch] = useReducer(favoriteReducer, initialState);
    const favorites = props.favoriteReducer.favorites;

    const remove = (id) => {
        dispatch(props.removeFavorite(id))
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={props.} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connect(st => st)(FavoriteMovieList);