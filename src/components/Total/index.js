import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'space-between',
    // maxWidth: 500
  },
  details: {
    // display: 'flex',
    // flexDirection: 'column',
  },
  content: {
    // flex: '1 0 auto',
  },
}));

export default function Total({
  amount,
  currentStep,
  singers,
  albums,
  songs,
  setTotalAction
}) {
  const classes = useStyles();
  const [total, setTotal] = useState({
    count: 0,
    amount: 0
  });

  useEffect(() => {
    if (currentStep === 0) {
      const selectedSignersIds = [];
      singers.filter(({ isSelected, id }) => {
        if (isSelected) selectedSignersIds.push(id);
      });
      const selectedSongs = songs.filter(({ singerID }) => selectedSignersIds.includes(singerID));
      setTotal({
        count: selectedSongs.length,
        amount: selectedSongs.reduce((sum, item) => sum + item.price, 0)
      })
    }
    if (currentStep === 1) {
      const selectedAlbumsIds = [];
      albums.filter(({ isSelected, id }) => {
        if (isSelected) selectedAlbumsIds.push(id);
      });
      const selectedSongs = songs.filter(({ albumID }) => selectedAlbumsIds.includes(albumID));
      if (selectedAlbumsIds.length !== 0) {
        setTotal({
          count: selectedSongs.length,
          amount: selectedSongs.reduce((sum, item) => sum + item.price, 0)
        })
      }
    }
    if (currentStep === 2) {
      const selectedSongs = songs.filter(({ isSelected }) => isSelected);
      // if (selectedSongs.length > 0) {
      setTotal({
        count: selectedSongs.length,
        amount: selectedSongs.reduce((sum, item) => sum + item.price, 0)
      })
      // }
    }
    if (currentStep === 3) {
      setTotalAction(total.count, total.amount);
    }
  }, [currentStep, singers, albums, songs])

  return (
    <Grid item xs={12}>
      <Card className={classes.root}  >
        <div className={classes.details}>
          <CardContent className={classes.content} >
            <Typography component="h6" variant="h6">
              <Box fontWeight="fontWeightRegular">
                Count: {total.count}
              </Box>
              <Box fontWeight="fontWeightRegular">
                Amount: {total.amount}$
              </Box>
            </Typography >
          </CardContent >
        </div>
      </Card >
    </Grid>
  )
}
