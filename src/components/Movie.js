import React, { useReducer } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../actions/movieActions';
import { reducer, initialState } from '../reducers/movieReducer';


const Movie = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id } = useParams();
    const { push } = useHistory();
    const { deleteMovie } = action;
    const movies = props.movieReducer.movies;
    const movie = movies.find(movie=>movie.id===Number(id));

    const deletesMovie = () => {
        dispatch(deleteMovie(movie.id));
        push('/movies');
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {displayFavorites &&  <span className="m-2 btn btn-dark">Favorite</span>}
                           
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={() => deletesMovie()}/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default connect(st => st, action)(Movie);