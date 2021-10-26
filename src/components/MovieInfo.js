import React from 'react'

function MovieInfo({
    open,
    onClose,
    movieData,
}) {
    return (open) ? (
        <div className="pop-dialog">
            {console.log(movieData)}
            <div className="pop-inner">
                <button className="close-btn" onClick={onClose}>
                    x
                </button>
                <div className="card-container">
                    <div className="img-movie-info">
                        <img src={movieData.Poster} />
                    </div>
                    <div className="card-details">
                        <div>Title:- {movieData.Title}</div>
                        <div className="card-sub-details">Year:- {movieData.Year}</div>
                        <div className="card-sub-details">Type:- {movieData.Type}</div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default MovieInfo
