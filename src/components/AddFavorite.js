import { Fab } from '@material-ui/core'
import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { makeStyles } from "@material-ui/core/styles";
function AddFavorite() {
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
                className={classes.textCover}>Add To Favorites</span>
            <Fab className={classes.fabStyle} size="small">
                <FavoriteBorderIcon className={classes.fabLike} />
            </Fab>
        </div>
    )
}

export default AddFavorite
