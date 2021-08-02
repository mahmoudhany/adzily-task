import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import SongsTable from './SongsTable';




export default function Songs() {

  const {
    albums,
    songs
  } = useSelector(state => ({
    albums: state.albums.filter(({ isSelected }) => isSelected),
    songs: state.songs
  }))

  const selectedAlbumsIds = albums.map(({ id }) => id);

  const songsList =
    songs.filter(({ albumID }) => selectedAlbumsIds.includes(albumID));

  return (
    <Grid container spacing={1} >
      {
        albums.map((album) => (
          <SongsTable album={album} songsList={songsList} key={album.id} />
        ))
      }
    </Grid>
  );
}
