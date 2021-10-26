import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import MovieInfo from './MovieInfo';

function MovieList(props) {
    const styles = makeStyles({
        cardTitle: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        cardMedia: {
            height: "100%",
            paddingTop: '56%',
            overflow: 'hidden',
        },
        card: {
            cursor: 'pointer',
            height: "100%",
            overflow: 'hidden'
        },
        bgImage: {
            width: '100%'
        },
        fabStyle: {
            marginRight: 10,
            backgroundColor: "transparent"
        },
        fabLike: {
            fill: "red"
        }

    });

    const [movieData, setMovieData] = useState({ open: false, movie: null })
    const movieList = props.movies;
    const [saveId, setSaveId] = useState("");
    const classes = styles();
    const FavoriteComponent = props.favoriteComponent;
    const TriggerComponent = props.popComponent;
    return (
        <>
            <Grid container spacing={3} >
                {movieList.map((movie, index) => {
                    return (
                        <Grid item xs={12} sm={4} key={movie.id}  >

                            <div className='image-container'>

                                <Card className={classes.card} style={{ overflowY: "hidden" }}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={movie.Poster}

                                    />
                                    <CardContent className="overlay"  >
                                        <Typography style={{ color: "white" }} variant="h5" onClick={() => { setMovieData({ open: true, movie: movie }) }} >
                                            {movie.Title}
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle2" >
                                            {movie.status}
                                            {/* <FavoriteComponent /> */}
                                        </Typography>
                                        <div onClick={() => props.handleFavoritesClick(movie)} >
                                            <FavoriteComponent />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    )
                })}
                <MovieInfo open={movieData.open} onClose={() => {
                    setMovieData({ open: false, movie: null })
                }} movieData={movieData.movie} />

            </Grid>
        </>
    )
}

export default MovieList
