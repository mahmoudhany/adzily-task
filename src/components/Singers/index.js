import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

import { selectSinger } from '../../redux/actions/singer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {

  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cover: {
    width: 151,
  },
}));

export default function Singers() {
  const singers = useSelector(state => state.singers)
  const dispatch = useDispatch()
  const classes = useStyles();

  return (
    <Grid container spacing={1} >
      {
        singers.map((singer, index) => (
          <Grid item xs={12} sm key={singer.id}>
            <Card className={classes.root} style={{ height: '140px' }}>
              <div className={classes.details}>
                <CardContent className={classes.content} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                        checked={singer.isSelected}
                        onChange={() => dispatch(selectSinger(singer.id))}
                        name="checked"
                      />}
                  />
                  <Typography component="h6" variant="h6">
                    <Box fontWeight="fontWeightRegular">
                      {singer.name}
                    </Box>
                  </Typography >
                </CardContent >
              </div>

              <CardMedia
                className={classes.cover}
                image={singer.img}
                title="Live from space album cover"
              />
            </Card >
          </Grid>
        ))
      }
    </Grid >
  )
}
