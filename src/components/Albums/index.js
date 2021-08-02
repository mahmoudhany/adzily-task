import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { selectAlbum } from '../../redux/actions/album';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  details: {
  },
  content: {

  },
  cover: {
    height: 151,
    objectFit: 'cover'
  }
}));

export default function Albums() {
  const {
    albums,
    singers
  } = useSelector(state => ({
    albums: state.albums,
    singers: state.singers.filter(({ isSelected }) => isSelected)
  }))

  const dispatch = useDispatch()
  const classes = useStyles();
  const selectedSingersIds = singers.map(({ id }) => id);

  const albumsList =
    albums.filter(({ singerID }) => selectedSingersIds.includes(singerID));

  return (
    <Grid container spacing={1} >
      {
        albumsList.map((album, index) => (
          <Grid item xs={12} sm={3} key={album.id} >
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                image={album.cover}
                title={album.name}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h6" variant="h6">
                    <Box fontWeight="fontWeightRegular">
                      {album.name}
                    </Box>
                  </Typography >
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        checked={album.isSelected}
                        onChange={() => dispatch(selectAlbum(album.id))}
                        name="checked"
                      />}
                  />
                </CardContent>
              </div>
            </Card>
          </Grid>
        ))
      }
    </Grid >
  );
}
