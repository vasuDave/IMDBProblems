import { Fab } from '@material-ui/core'
import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from "@material-ui/core/styles";

function RemoveFavorite() {
    const styles = makeStyles({
        fabStyle: {
            marginRight: 10,
            backgroundColor: "white"
        },
        fabLike: {
            fill: "red"
        },
        textCover: {
            margin: 20,
            color: "white"
        }
    });
    const classes = styles();
    return (
        <div>
            <span
                className={classes.textCover}>Remove To Favorites</span>
            <Fab className={classes.fabStyle} size="small">
                <FavoriteIcon className={classes.fabLike} />
            </Fab>
        </div>
    )
}

export default RemoveFavorite
